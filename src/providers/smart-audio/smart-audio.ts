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

  constructor(public nativeAudio: NativeAudio, platform: Platform) {
    if (platform.is('cordova')) {
      this.audioType = 'native';
      
    }
  }

  preload(key, asset) {
    if (this.audioType === 'html5') {

      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };

      this.sounds.push(audio);

    } else {
      
      this.nativeAudio.preloadComplex(key, asset,1,1,0);

      let audio = {
        key: key,
        asset: key,
        type: 'native'
      };

      this.sounds.push(audio);
    }

  }

  play(key) {

    let audio = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if (audio.type === 'html5') {
      this.music = new Audio(audio.asset);
      this.music.play();

    } else {

      this.nativeAudio.play(audio.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    }

  }
  
  stop(key){
    this.music.pause();
  }

  resume(key){
    this.music.play();
  }
}