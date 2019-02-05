import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Music } from "../../models/music";


/*
  Generated class for the UrlMusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlMusicProvider {
  private PATH = "musics/";
  private _musics: Array<Music>

  constructor(private firebase: AngularFireDatabase) {}

  arrayLikeObjToArray(arrayLike) {
    let realArray: Array<Music> = [];

    for (var key in arrayLike) {
      let music: Music = { id: undefined, title: undefined, artist: undefined, url: undefined };
      music.id = key;
      if (!arrayLike.hasOwnProperty(key)) continue;
      music.id = key;
      music.title = arrayLike[key].title;
      music.artist = arrayLike[key].artist;
      music.url = arrayLike[key].url;
      realArray.push(music);
    }
    return realArray;
  }

  assignAllMusics() {
    this.firebase.database.ref(this.PATH).once('value').then((snapshot) => {
      this._musics = this.arrayLikeObjToArray(snapshot.val());
    });
  }

  getAllMusics(){
    return this._musics;
  }
}

