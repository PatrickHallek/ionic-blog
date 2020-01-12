import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-set-username',
  templateUrl: './set-username.component.html',
  styleUrls: ['./set-username.component.scss'],
})
export class SetUsernameComponent implements OnInit {

  public username: string;

  constructor(public modalController: ModalController, private authService: AuthService) { }

  ngOnInit() { }

  setUsername() {
    this.authService.setUsername(this.username);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
