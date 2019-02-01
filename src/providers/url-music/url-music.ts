import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'


/*
  Generated class for the UrlMusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlMusicProvider {
private PATH = 'musics/'
  

  constructor(private db: AngularFireDatabase) {
  }

  getAllMusics(){
    return this.db.list(this.PATH, ref => ref.orderByChild('name')).snapshotChanges().map(data => {
      return data.map(m => ({key: m.key, ...m.payload.val()})) ;
    })
  }

  getMusic(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map( m=> {
      return {key: m.payload.key, ... m.payload.val()} ;
    })
  }
}

