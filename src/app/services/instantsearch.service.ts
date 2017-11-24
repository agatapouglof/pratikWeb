import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class InstantSearchService {
  search = instantsearch({
    appId: '9GDDI1BXYM',
    apiKey: '8595cf7685c9a51afe3e171cbd116d43',
    indexName: 'pratik',
    urlSync: true
  });

  constructor() {}
}
