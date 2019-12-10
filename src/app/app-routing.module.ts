import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { CardListComponent } from './card-list/card-list.component';

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
