import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { NowPlayingPage } from '../pages/now-playing/now-playing';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AudioProvider } from '../providers/audio/audio';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CloudProvider } from '../providers/cloud/cloud';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { UserNameProvider } from '../providers/user-name/user-name';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ResetUserNamePage } from '../pages/reset-user-name/reset-user-name';



const firebaseAuth = {
  apiKey: "AIzaSyDRDBX7nKK7kYbkaAU6l34nQ-4fyM_9Dd8",
  authDomain: "listen2me-e9f6f.firebaseapp.com",
  databaseURL: "https://listen2me-e9f6f.firebaseio.com",
  projectId: "listen2me-e9f6f",
  storageBucket: "listen2me-e9f6f.appspot.com",
  messagingSenderId: "590256246511"
};
 
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LibraryPage,
    ProfilePage,
    SettingsPage,
    NowPlayingPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ResetPasswordPage,
    ResetUserNamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    LibraryPage,
    SettingsPage,
    NowPlayingPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ResetPasswordPage,
    ResetUserNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioProvider,
    CloudProvider,
    UserNameProvider,
  ]
})
export class AppModule {}