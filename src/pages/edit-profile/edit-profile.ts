import { FirebaseApp } from 'angularfire2';
import { IonicPage, AlertController } from 'ionic-angular';
import { Component, Inject} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})

export class EditProfilePage {
  reference;
  archieve;


  constructor(private alertCtrl: AlertController, public afAuth: AngularFireAuth, public afDb: AngularFireDatabase, @Inject(FirebaseApp) fb: FirebaseApp) {
    this.reference = fb.storage().ref();
  }

  downloadArchieve(nome: string) {
    let path = this.reference.child('pasta/' + nome);
    path.getDownloadURL().then(url => {
      console.log(url);
    });
  }

  updateArchieve(event) {
    this.archieve = event.srcElement.files[0];
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  sendArchieve(dir, archieve) {
    let path = this.reference.child('dir/' + this.archieve.name);
      let task = path.put(this.archieve);
      task.on('state_changed', (snapshot) => {
        task.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      }, error => {
          this.alert('Upload failed');
      }, () => {
        this.alert('Successfully uploaded');
      });
    }

}
