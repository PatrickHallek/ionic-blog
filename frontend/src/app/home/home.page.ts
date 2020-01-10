import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BlogPostViewComponent } from '../components/blog-post-view/blog-post-view.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public modalController: ModalController) { }

  async openBlogPost() {
    const modal = await this.modalController.create({
      component: BlogPostViewComponent
    });
    return await modal.present();
  }

}
