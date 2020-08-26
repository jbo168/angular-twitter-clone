import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from '../feed/feed.component';
import { FeedEditComponent } from '../feed/feed-edit/feed-edit.component';

const routes: Routes = [
{
  path: '',
  component: FeedComponent,
    children: [
      {
        path: 'new',
        component: FeedEditComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {

}
