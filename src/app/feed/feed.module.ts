import { NgModule } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FeedRoutingModule,
    SharedModule
  ],
  exports: [
    FeedComponent,
  ]
})
export class FeedModule {

}
