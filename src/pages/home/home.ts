import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserNameProvider } from '../../providers/user-name/user-name';
import { Playlist } from '../../models/playlist';
import { PlaylistProvider } from '../../providers/playlist/playlist';
import { NowPlayingPage } from '../now-playing/now-playing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private _playlist: Array<Playlist> = [];
  items: any = [];
  itemExpanded: boolean = true;
  itemExpandHeight: number = 200;
  public username:string;

  constructor(public pl: PlaylistProvider, private _userNameProvider: UserNameProvider, public navCtrl: NavController) {
    this._playlist = this.pl.getAllPlaylists();
    console.log(this.pl.getAllPlaylists());
    console.log(this._playlist);
    this.username = _userNameProvider.username;
    this.items = [{expanded: false}]
  }

  

  expandItem(item){
    item.expanded = !item.expanded;
  }

  pushPage(reference) {
    this.navCtrl.push(NowPlayingPage, {
    reference: reference
   });
   this.navCtrl.getViews().forEach(v=>console.log(v.name));
  }
  
}