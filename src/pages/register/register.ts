import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { PasswordlessAuthentication } from 'auth0-js';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
      this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.user.value+'@gmail.com', this.password.value)
      .then(data => {
        console.log('got data', data);
        this.alert('Successfully registered');
      })

      .catch(error =>{
        console.log('got an error', error);
        this.alert('Register failed');
      });
      
      console.log('Would register user with', this.user.value, this.password.value);
  }
}