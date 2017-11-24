import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InstantSearchService } from './services/instantsearch.service';

import {routing} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HitsComponent } from './components/hits/hits.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RefinementListComponent } from './components/refinement-list/refinement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HitsComponent,
    SearchBoxComponent,
    RefinementListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [InstantSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
