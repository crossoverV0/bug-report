import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'relatorio',
        pathMatch: 'full' 
      },
    ]
  },
  { 
    path: '**', 
    redirectTo: '404', 
    pathMatch: 'full' 
  },
  { 
    path: '404', 
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
