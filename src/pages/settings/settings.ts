import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetUserNamePage } from '../reset-user-name/reset-user-name';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  resetUserName(){
    this.navCtrl.push(ResetUserNamePage);
  }

  resetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
  

}