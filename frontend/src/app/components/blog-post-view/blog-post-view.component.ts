import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { BlogPostService } from 'src/app/service/blog-post.service';


@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.scss'],
})
export class BlogPostViewComponent implements OnInit {

  @Input() comments: any;
  @Input() user: any;
  @Input() title: any;
  @Input() content: any;
  @Input() _id: any;
  newComment: string;

  constructor(public modalController: ModalController, public navCtrl: NavController, private blogPostService: BlogPostService) { }

  ngOnInit() {
  }

  postComment() {
    this.blogPostService.createBlogPostComment(this._id, 'user', this.newComment);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
