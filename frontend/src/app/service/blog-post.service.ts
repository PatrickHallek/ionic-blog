import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private blogPosts = new Subject<any>();

  constructor(private http: HttpClient) { }


  public getBlogPostListener() {
    return this.blogPosts.asObservable();
  }

  public getBlogPosts() {
    this.http.get('http://localhost:3000/blog-posts')
      .subscribe((blogPosts) => {
        this.blogPosts.next(blogPosts);
      }, err => console.error(err));
  }

  public createBlogPost(user, content) {
    const send = { user, content };
    this.http.post('http://localhost:3000/blog-post', send)
      .subscribe(() => { }, err => console.error(err));
  }

  public createBlogPostComment() {
    this.http.put('http://localhost:3000/blog-post-comment', {})
      .subscribe(() => { }, err => console.error(err)
      );
  }


}
