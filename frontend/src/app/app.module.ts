import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPostViewComponent } from './components/blog-post-view/blog-post-view.component';
import { CreateBlogPostComponent } from './components/create-blog-post/create-blog-post.component';
import { SetUsernameComponent } from './components/set-username/set-username.component';

@NgModule({
  declarations: [AppComponent, BlogPostViewComponent, CreateBlogPostComponent, SetUsernameComponent],
  entryComponents: [BlogPostViewComponent, CreateBlogPostComponent, SetUsernameComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
