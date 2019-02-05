import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Playlist } from '../../models/playlist';
import { UserNameProvider } from '../user-name/user-name';

/*
  Generated class for the PlaylistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaylistProvider {
  private _playlists: Array<Playlist>;
  private PATH = "playlists/";

  constructor(private firebase: AngularFireDatabase, private user: UserNameProvider) {}

  arrayLikeObjToArray(arrayLike) {
    let realArray: Array<Playlist> = [];

    for (var key in arrayLike) {
      let playlist: Playlist = { id: undefined, user: undefined, name: undefined, musics: undefined };
      playlist.id = key;
      if (!arrayLike.hasOwnProperty(key)) continue;
      playlist.user = arrayLike[key].user;
      playlist.name = arrayLike[key].name;
      playlist.musics = arrayLike[key].musics;
      realArray.push(playlist);
    }
    return realArray;
  }

  assignAllPlaylists() {
    this.firebase.database.ref(this.PATH).once('value').then((snapshot) => {
      this._playlists = this.arrayLikeObjToArray(snapshot.val());
      
    });
  }

  getAllPlaylists(){
    console.log(this._playlists);
    return this._playlists;
  }

  createPlayList(playlistmusics, playlistname){
    console.log(playlistname);
    return new Promise((resolve) =>{
      this.firebase.list(this.PATH)
      .push({user: this.user.username, name: playlistname, musics: playlistmusics})
      .then(() => resolve());
    });
  }

  removePlaylist(){

  }
}