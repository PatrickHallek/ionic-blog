import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BlogPostViewComponent } from '../components/blog-post-view/blog-post-view.component';
import { Subscription } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { CreateBlogPostComponent } from '../components/create-blog-post/create-blog-post.component';
import { BlogPost } from '../models/blog-post';
import { SetUsernameComponent } from '../components/set-username/set-username.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private blogPostsListenerSub: Subscription;
  public blogPosts: Array<BlogPost>;

  constructor(public modalController: ModalController, private blogPostService: BlogPostService, private authService: AuthService) { }

  ngOnInit() {
    this.checkIfUsername();
    this.blogPostService.getBlogPosts();
    this.blogPostsListenerSub = this.blogPostService
      .getBlogPostListener().subscribe((blogPosts: Array<BlogPost>) => this.blogPosts = blogPosts);
  }

  async checkIfUsername() {
    if (!await this.authService.getUsername()) {
      this.setUsername();
    }
  }

  async openBlogPost(blogPost) {
    const modal = await this.modalController.create({
      component: BlogPostViewComponent,
      componentProps: { blogPost }
    });
    return await modal.present();
  }

  async createBlogPost() {
    const modal = await this.modalController.create({
      component: CreateBlogPostComponent
    });
    return await modal.present();
  }

  async setUsername() {
    const modal = await this.modalController.create({
      component: SetUsernameComponent
    });
    return await modal.present();
  }

  ngOnDestroy() {
    this.blogPostsListenerSub.unsubscribe();
  }

}
