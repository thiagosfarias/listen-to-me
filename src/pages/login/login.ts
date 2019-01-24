import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController) {

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(){
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.value +'@gmail.com', this.password.value)
    .then( data =>{
      console.log('got some data', data);
      this.alert('Successfully logged in');
      this.navCtrl.push(TabsPage);
    })
    
    .catch( error =>{
      console.log('got an error', error);
      this.alert('Login failed');
    })
    
    console.log('Would sign in with ', this.user.value, this.password.value);

  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
