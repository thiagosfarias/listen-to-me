import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

/*
  Generated class for the SmartAudioProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SmartAudioProvider {

  audioType: string = 'html5';
  sounds: any = [];
  music: any;
  state: number = 0;
  key: string;
  asset: string;

  constructor(public nativeAudio: NativeAudio, platform: Platform) {}

  preload(key, asset) {
    this.key = key;
    this.asset = asset;
  }

  play(key) {
    this.music = new Audio(this.asset);
    this.music.load();
    this.music.play();
    this.music.loop = true;
  }

  pause(){
    this.music.pause();
  }

  resume(){
    this.music.play();
  }

  musicState(newstate){
    this.music.preventDefault();
    this.state = newstate;
  }

  nextMusic(arraylength){
    if(this.state < arraylength){
      this.state++;
    }
  }
  
  previousMusic(){
    if(this.state > 0){
      this.state--;
    }
  }

}