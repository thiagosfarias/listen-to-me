import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';




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
  public nomeDoUsuario:string = "Thiago";
  public followStatus:string = "Follow";
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {

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
