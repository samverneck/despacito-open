import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SharedModule } from '../shared';

import { ErroComponent } from './erro.component';

export const routes = [
  { path: '', component: ErroComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ErroComponent
  ],
  imports: [
    //SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class ErroModule {
  static routes = routes;
}