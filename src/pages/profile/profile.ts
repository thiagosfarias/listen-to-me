import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserNameProvider } from '../../providers/user-name/user-name';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public username:string;
  public followStatus:string = "Follow";
  

  constructor(private _userNameProvider: UserNameProvider, public navCtrl: NavController, public navParams: NavParams, public app: App) {
      this.username = _userNameProvider.username;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  setFollowStatus(){
    this.followStatus = "Followed";
  }
}
