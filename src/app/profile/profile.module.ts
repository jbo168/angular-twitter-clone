import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: [
    ProfileEditComponent
  ]
})
export class ProfileModule {}
