import { NgModule } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { FeedItemComponent } from '../feed/feed-list/feed-item/feed-item.component';
import { FeedEditComponent } from '../feed/feed-list/feed-edit/feed-edit.component';
import { FeedListComponent } from '../feed/feed-list/feed-list.component';
import { LikeButtonComponent } from '../feed/feed-list/feed-item/like-button/like-button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  declarations: [
    FeedComponent,
    FeedItemComponent,
    FeedEditComponent,
    FeedListComponent,
    LikeButtonComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FeedRoutingModule
  ],
  exports: [
    FeedComponent,
    FeedItemComponent,
    FeedEditComponent,
    FeedListComponent,
    LikeButtonComponent,
  ]
})
export class FeedModule {

}
