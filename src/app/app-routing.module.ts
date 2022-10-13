import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TouchComponent } from './touch/touch.component';
import {ExplodeComponent} from './explode/explode.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'touch',
    component: TouchComponent
  },
  {
    path: 'explode',
    component: ExplodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
