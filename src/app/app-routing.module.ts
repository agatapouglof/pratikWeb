import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: HomeComponent,
        // children: [
        //     { path: 'add', component: ProductAddEditComponent },
        //     { path: 'edit/:id', component: ProductAddEditComponent }
        // ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
