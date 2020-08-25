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
import { FavouritesComponent } from './favourites/favourites.component';
import { FeedEditComponent } from './feed/feed-list/feed-edit/feed-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    ProfileComponent,
    FeedComponent,
    FeedItemComponent,
    FeedEditComponent,
    FeedListComponent,
    LikeButtonComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
