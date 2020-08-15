import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedItemComponent } from './feed/feed-list/feed-item/feed-item.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedService } from './feed/feed.service';
import { LikeButtonComponent } from './feed/feed-list/feed-item/like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    FeedComponent,
    ProfileComponent,
    FeedItemComponent,
    FeedListComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
