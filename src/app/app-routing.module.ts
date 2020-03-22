import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: CardListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyComponent, CardListComponent];
