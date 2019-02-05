import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { UrlMusicProvider } from '../../providers/url-music/url-music';
import { FirebaseDatabase } from 'angularfire2';
import { Music } from '../../models/music';


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

  visible: any;
  contador: number = 0;
  public isObject: number;
  public title:string;
  public artist:string;
  public url:string;
  public musics: Array<Music> = [];
  
  constructor(private audio: SmartAudioProvider, public navParams: NavParams) {
    let music = navParams.get('reference');
    console.log(music);
    if(music instanceof Array){
      this.title = music[this.audio.state].title;
      this.artist = music[this.audio.state].artist;
      this.playMusic(music[this.audio.state]);
      console.log(this.audio.state);
      this.musics = music;
      this.isObject = 0;
    }
    else{
      if(music != undefined){
        this.playMusic(music);
        this.title = music.title;
        this.artist = music.artist;
      }
    }
    
  }
  
  ionViewDidLoad() {
    console.log();
  }

  ionViewDidLeave(){
    this.audio.pause();
  }

  buttonState(){
    this.visible = !this.visible;
    if(this.contador%2 != 0){
      this.pauseMusic();
    } else if(this.contador%2 == 0){
      this.resumeMusic();
    }
  }

  playMusic(music: Music){
    console.log(music.url);
    this.audio.preload('music.id', music.url);
    this.audio.play('music.id');
    this.contador++;
  }
  pauseMusic(){
    this.audio.pause();
    this.contador = 2;
  }
  resumeMusic(){
    this.audio.resume();
    this.contador = 1;
  }

  nextMusic(){
    if(this.isObject == 0){
      this.audio.pause();
      this.audio.nextMusic(this.musics.length);
      this.title = this.musics[this.audio.state].title;
      this.artist = this.musics[this.audio.state].artist;
      this.playMusic(this.musics[this.audio.state]);
      this.contador = 1;
    }
  }

  previousMusic(){
    if(this.isObject == 0){
      this.audio.pause();
      this.audio.previousMusic();
      this.title = this.musics[this.audio.state].title;
      this.artist = this.musics[this.audio.state].artist;
      this.playMusic(this.musics[this.audio.state]);
      this.contador = 1;
    }
  }
}