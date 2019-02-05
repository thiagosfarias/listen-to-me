import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UrlMusicProvider } from '../../providers/url-music/url-music';
import { NowPlayingPage } from '../now-playing/now-playing';
import { Music } from '../../models/music';
import { PlaylistProvider } from '../../providers/playlist/playlist';
import { Playlist } from '../../models/playlist';
import { UserNameProvider } from '../../providers/user-name/user-name';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  private checkplaylist: Array<Playlist>;
  private _playlist: Array<Playlist> = [];
  public _musics: Array<Music> = [];
  public playlist: Array<Playlist> = [];
  public playlistmusics: Array<Music> = [];
  @ViewChild('playlistname') playlistname;
  option = "'musics'";

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public db: UrlMusicProvider, public pl: PlaylistProvider,private user: UserNameProvider) {
    this._musics = this.db.getAllMusics();
    this.checkplaylist = this.pl.getAllPlaylists();
    console.log(this.checkplaylist);
    console.log(this.checkplaylist[0].user);
   
    for(var i = 0; i < this.checkplaylist.length; i++){
     if(this.checkplaylist[i].user === this.user.username){
        this._playlist.push(this.checkplaylist[i]);
      }
    }
  
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  addMusicsToPlaylist(music){
    this.playlistmusics.push(music);
    console.log(this.playlistmusics);
  }

  createNewPlaylist(){
    console.log(this.playlistname)
    this.pl.createPlayList(this.playlistmusics, this.playlistname.value);
    this.alert('Playlist created sucessfully');
  }

  deletePlaylist(){

  }

  pushPage(reference) {
    this.navCtrl.push(NowPlayingPage, {
    reference: reference
   });
   this.navCtrl.getViews().forEach(v=>console.log(v.name));
  }

  segmentChanged(segment, ev: any) {
    console.log(segment, ev);
  }
}