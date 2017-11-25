
import { Component, OnInit } from '@angular/core';
import { connectHits } from 'instantsearch.js/es/connectors';

import { InstantSearchService } from '../../services/instantsearch.service';

// img-fluid rounded
@Component({
  selector: 'app-hits',
  template: `
  <div class="row" *ngFor="let hit of state.hits">
    <div class="col-md-2"></div>
     <div class="col-md-5">
       <a href="{{hit.link}}">
       <div class="main">
       <img class="img-thumbnail img-responsive img-center img-fluid" src="{{hit.src}}" data-src={{hit.image}} alt=""  width="400" height="300" style="margin:0 auto; max-width: 100%; height: auto;">
       </div>
       </a>
     </div>
     <div class="col-md-5">
       <h3>{{hit.prix}}</h3>
       <p>{{hit.adresse}}</p>
       <a class="btn btn-primary" href="{{hit.link}}">Voir l'offre</a>
     </div>
   </div>

`,
  styles: []
})
export class HitsComponent implements OnInit {
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  state: { hits: {}[] } = { hits: [] };

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
    const widget = connectHits(this.updateState);

    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }
}
// <div class="is-hits-root">
//   <ul>
//     <li *ngFor="let hit of state.hits">
//       {{ hit.adresse }} : {{ hit.prix }}
//       <img src="{{ hit.src }}" data-src="{{hit.image}}">
//       <br/>
//       voir : <a href="{{ hit.link }}" target="_blank"> DETAIL </a>
//     </li>
//   </ul>
// </div>


// <section class="testimonials text-center bg-light">
//   <div class="container">
//     <h2 class="mb-5">Resultat</h2>
//     <div class="row">
//       <div class="col-lg-4" *ngFor="let hit of state.hits">
//         <div class="testimonial-item mx-auto mb-5 mb-lg-0">
//           <img class="img-fluid" height="300" width="300" src="{{hit.src}}" alt="" data-src="{{hit.image}}">
//           <h5>{{hit.prix}}</h5>
//           <p class="font-weight-light mb-0">{{hit.adresse}}</p>
//         </div>
//       </div>
//   </div>
//   </div>
// </section>
