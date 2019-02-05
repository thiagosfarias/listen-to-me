import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = ProfilePage;
  tab4Root = SettingsPage;
  constructor() {

  }
}