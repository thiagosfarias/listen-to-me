import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserNameProvider } from '../../providers/user-name/user-name';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private userNameProvider: UserNameProvider, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, private _loadingController:
    LoadingController) {

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    let loading = this._loadingController.create({ content: "Signing in..." });
    loading.present();
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.value + '@gmail.com', this.password.value)
      .then(data => {
        loading.dismiss();
        this.navCtrl.push(TabsPage);
      })

      .catch(error => {
        console.log('got an error', error);
        this.alert('Login failed');
      })
    this.userNameProvider.username = this.user.value;
    console.log('Would sign in with ', this.user.value, this.password.value);

  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
}