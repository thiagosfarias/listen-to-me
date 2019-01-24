import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CloudProvider {
  files:any = [
    { url: 'https://archive.org/details/rre2019-01-21.grg.cm3.flac16/rre2019-01-21.grg.cm3.flac16_set1_t03.flac', 
      name: 'The Good Life by Railroad Earth'
    },
    {
      url: 'https://archive.org/details/rre2019-01-21.grg.cm3.flac16/rre2019-01-21.grg.cm3.flac16_set1_t06.flac',
      name: 'Crossing the Gap by Railroad Earth'
    },
    { url: 'https://archive.org/details/rre2019-01-21.grg.cm3.flac16/rre2019-01-21.grg.cm3.flac16_set2_t02.flac',
      name: 'Saddle the Sun by Railroad Earth'
    }
  ];
  getFiles() {
   return of(this.files);
  }
}
