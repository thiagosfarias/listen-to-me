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
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioProvider
  ]
})
export class AppModule {}
