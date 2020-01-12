import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private blogPosts = new Subject<Array<BlogPost>>();

  constructor(private http: HttpClient) { }


  public getBlogPostListener() {
    return this.blogPosts.asObservable();
  }

  public getBlogPosts() {
    this.http.get('http://localhost:3000/blog-posts')
      .subscribe((blogPosts: Array<BlogPost>) => {
        this.blogPosts.next(blogPosts);
      }, err => console.error(err));
  }

  public createBlogPost(user, title, content) {
    this.http.post('http://localhost:3000/blog-post', { user, title, content })
      .subscribe(() => { this.getBlogPosts(); }, err => console.error(err));
  }

  public createBlogPostComment(id, user, content) {
    this.http.put('http://localhost:3000/blog-post-comment', { id, user, content })
      .subscribe(() => { this.getBlogPosts(); }, err => console.error(err)
      );
  }


}
