import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NowPlayingPage } from '../now-playing/now-playing';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = NowPlayingPage;
  tab4Root = ContactPage;
  constructor() {

  }
}
