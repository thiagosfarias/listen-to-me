import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetUserNamePage } from './reset-user-name';

@NgModule({
  declarations: [
    ResetUserNamePage,
  ],
  imports: [
    IonicPageModule.forChild(ResetUserNamePage),
  ],
})
export class ResetUserNamePageModule {}
