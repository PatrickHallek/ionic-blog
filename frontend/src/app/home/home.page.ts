import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BlogPostViewComponent } from '../components/blog-post-view/blog-post-view.component';
import { Subscription } from 'rxjs';
import { BlogPostService } from '../service/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private blogPostsListenerSub: Subscription;
  public blogPosts;

  constructor(public modalController: ModalController, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.blogPostService.getBlogPosts();
    this.blogPostsListenerSub = this.blogPostService
      .getBlogPostListener().subscribe(blogPosts => this.blogPosts = blogPosts);
  }

  async openBlogPost(blogPost) {
    const modal = await this.modalController.create({
      component: BlogPostViewComponent,
      componentProps: blogPost
    });
    return await modal.present();
  }

  ngOnDestroy() {
    this.blogPostsListenerSub.unsubscribe();
  }

}
