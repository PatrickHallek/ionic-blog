import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss'],
})
export class CreateBlogPostComponent implements OnInit {

  public title: string;
  public newBlogPostContent: string;

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private blogPostService: BlogPostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async postBlogPost() {
    if (this.title && this.newBlogPostContent) {
      const user = await this.authService.getUsername();
      this.blogPostService.createBlogPost(user, this.title, this.newBlogPostContent);
      this.dismiss();
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
