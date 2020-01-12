import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { BlogPost } from 'src/app/models/blog-post';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.scss'],
})
export class BlogPostViewComponent implements OnInit {

  @Input() blogPost: BlogPost;
  public newComment: string;

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private blogPostService: BlogPostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async postComment() {
    const user = await this.authService.getUsername();
    this.blogPostService.createBlogPostComment(this.blogPost._id, user, this.newComment);
    this.blogPost.comments.push({ user, content: this.newComment, timestamp: new Date(Date.now()) });
    this.newComment = '';
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
