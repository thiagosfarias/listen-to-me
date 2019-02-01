import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToolbarTitle } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { UrlMusicProvider } from '../../providers/url-music/url-music';
import { FirebaseDatabase } from 'angularfire2';


/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {
  @ViewChild('tittle') tittle;
  @ViewChild('artist') artist;
  visible: boolean = true;
  contador: number = 0;
  
  constructor(private url: UrlMusicProvider, private audio: SmartAudioProvider, public navParams: NavParams) {
    let reference = navParams.get('reference');
    console.log(reference);
    if(reference != undefined){
      this.playMusic(reference);
    }
  }
  
  ionViewDidLoad() {
    console.log();
  }

  buttonState(){
    this.visible = !this.visible;
    if(this.contador == 0){
    } else if(this.contador%2 != 0){
      this.stopMusic();
    } else if(this.contador%2 == 0){
      this.resumeMusic();
    }

  }

  playMusic(reference){
    this.audio.preload('mySongId', reference);
    this.audio.play('mySongId');
    this.contador++;
  }
  stopMusic(){
    this.audio.stop('mySongId');
    this.contador = 2;
  }
  resumeMusic(){
    this.audio.resume('mySongId');
    this.contador = 1;
  }
}