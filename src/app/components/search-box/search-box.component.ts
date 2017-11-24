import { Component, OnInit } from '@angular/core';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { InstantSearchService } from '../../services/instantsearch.service';
import { connectRefinementList } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-search-box',
  template: `
  <input
    type="text"
    [value]="state.query"
    class="form-control form-control-lg" placeholder="ville quartier prix description..."
    (input)="handleChange($event.target.value)"
  />
`,
  styles: []
})
export class SearchBoxComponent implements OnInit {
  // Define SearchBox initial state
  state: { query: string; refine: Function } = {
    query: '',
    refine() {}
  };

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    const widget = connectSearchBox(this.updateState);
    this.instantSearchService.search.addWidget(widget());
  }
  // ngOnInit() {
  //   const widget = connectRefinementList(this.updateState);
  //   this.instantSearchService.search.addWidget(widget({
  //     attributeName: 'category'
  //   }));
  // }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }
    handleChange(query) {
    this.state.refine(query)
  }
}
