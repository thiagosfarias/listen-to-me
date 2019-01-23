import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(TabsPage);
    console.log("Username: "+this.username);
    console.log("Password: "+this.password);

  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
