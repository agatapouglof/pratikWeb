import { Component, OnInit ,AfterViewInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { InstantSearchService } from '../services/instantsearch.service';

// import * as instantsearch from 'instantsearch.js'
// declare var require: any;
// const instantsearch = require('instantsearch.js')
import * as instantsearch from 'instantsearch.js'
declare var instantsearch: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search: any;
  constructor(private instantSearchService: InstantSearchService) { }

  ngOnInit() {
//     const options = environment.algolia;
//
// //     const options = {
// //       appId: string,
// //       apiKey: string,
// //       indexName: string
// //     }
//     this.search = instantsearch(options);
//
//
//     // search box widget
//     this.search.addWidget(
//       instantsearch.widgets.searchBox({
//         container: '#search-box',
//         autofocus: false,
//         placeholder: 'Search for actors',
//         poweredBy: true
//       })
//     );
//
//     // initialize hits widget
//     this.search.addWidget(
//       instantsearch.widgets.hits({
//         container: '#hits',
//         templates: {
//           empty: 'No results',
//           item: `<img src=https://image.tmdb.org/t/p/w300{{image_path}} width="50px">
//                 <strong>Result {{objectID}}</strong>:
//                 {{{_highlightResult.name.value}}}`
//         },
//         escapeHits: true
//       })
//     );
//
//     this.search.addWidget(
//       instantsearch.widgets.stats({
//         container: '#stats'
//       })
//     );
//
//     this.search.addWidget(
//       instantsearch.widgets.pagination({
//         container: '#pagination',
//         maxPages: 20,
//       })
//     );
//
//     this.search.addWidget(
//       instantsearch.widgets.analytics({
//         pushFunction: (query, state, results) => {
//           console.log(query)
//           console.log(state)
//           console.log(results)
//         }
//       })
//     );
//
//     this.search.start();
  }
  ngAfterViewInit() {
    this.instantSearchService.search.start();
  }

}
