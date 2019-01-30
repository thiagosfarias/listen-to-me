import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

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

  JCinfo = "start V1.1";
  JCneedLoadFlag = true;
  visible: any;
  contador: number = 0;

  constructor(private audio: SmartAudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }

  buttonState(){
    this.visible = !this.visible;
    if(this.contador == 0){
      this.playMusic();
    } else if(this.contador%2 != 0){
      this.stopMusic();
    } else if(this.contador%2 == 0){
      this.resumeMusic();
    }
  }

  playMusic(){
    this.audio.preload('mySongId', 'assets/musics/04 Brooklyn Baby.mp3')
    this.audio.play('mySongId');
    this.contador++;
  }

  stopMusic(){
    this.audio.stop('mySongId');
    this.contador++;

  }

  resumeMusic(){
    this.audio.resume('mySongId');
    this.contador++;
  }
  nextMusic(){

  }

  previousMusic(){
    
  }
}