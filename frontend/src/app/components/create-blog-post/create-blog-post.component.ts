import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BlogPostService } from 'src/app/service/blog-post.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss'],
})
export class CreateBlogPostComponent implements OnInit {

  public title: string;
  public newBlogPost: string;

  constructor(public modalController: ModalController, public navCtrl: NavController, private blogPostService: BlogPostService) { }

  ngOnInit() {
  }

  postBlogPost() {
    this.blogPostService.createBlogPost('user', this.title, this.newBlogPost);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
