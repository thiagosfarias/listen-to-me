import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { HomePage } from '../home/home';
import { NowPlayingPage } from '../now-playing/now-playing';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = NowPlayingPage;
  tab4Root = ProfilePage;
  tab5Root = SettingsPage;
  constructor() {

  }
}
