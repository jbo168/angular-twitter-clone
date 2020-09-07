import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
      children: [
        {
          path: 'edit',
          component: ProfileEditComponent
        }
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {

}
