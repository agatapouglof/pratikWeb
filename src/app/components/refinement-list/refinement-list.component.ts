import { Component, OnInit } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-refinement-list',
  template: `
    <div>
      <label
        *ngFor="let item of (state.items ? state.items.slice(0, 10) : [])"
        (click)="handleChange($event.target.value)"
      >
        <input
          type="checkbox"
          [value]="item.value"
          [checked]="item.isRefined"
        />
        <span>({{ item.count }})</span>
      </label>
    </div>
  `,
  styles: []
})
export class RefinementListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
