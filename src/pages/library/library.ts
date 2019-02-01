import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UrlMusicProvider } from '../../providers/url-music/url-music';
import { Observable } from 'rxjs';
import { NowPlayingPage } from '../now-playing/now-playing';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  musics: Observable<any>;
  option = "'musics";
  constructor(private url: UrlMusicProvider, public navCtrl: NavController, public db: UrlMusicProvider) {
    this.musics = this.db.getAllMusics();
    console.log(this.musics.subscribe(received =>{console.log(received)}));
  }

  showPlaylists(){

  }

  createNewPlaylist(){

  }

  deletePlaylist(){

  }

  pushPage(reference) {
    this.navCtrl.push(NowPlayingPage, {
    reference: reference
   });
  }

  segmentChanged(segment, ev: any) {
    console.log(segment, ev);
  }
}
