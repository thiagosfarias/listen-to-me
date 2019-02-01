import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserNameProvider } from '../../providers/user-name/user-name';
import { NowPlayingPage } from '../now-playing/now-playing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items: any = [];
  itemExpanded: boolean = true;
  itemExpandHeight: number = 200;

  public username:string;

  constructor(private _userNameProvider: UserNameProvider, public navCtrl: NavController) {
    this.username = _userNameProvider.username;
    this.items = [{expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},]
  }

  expandItem(item){
    item.expanded = !item.expanded;
  }

  goToNowPlayer(){
    this.navCtrl.push(NowPlayingPage);
  }

}