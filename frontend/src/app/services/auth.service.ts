import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }

  setUsername(user: string) {
    this.storage.set('user', user);
  }

  getUsername() {
    return new Promise<string>(resolve => {
      this.storage.get('user').then((user: string) => {
        resolve(user);
      });
    });
  }
}
