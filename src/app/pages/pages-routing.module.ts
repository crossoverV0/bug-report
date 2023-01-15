import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent 
      },
      {
        path: 'relatorio',
        component: ReportsComponent
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
