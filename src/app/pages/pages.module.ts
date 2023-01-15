import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ButtonModule} from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    PagesComponent,
    NotFoundComponent,
    ReportsComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
