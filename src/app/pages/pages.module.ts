import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ButtonModule} from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';
import { ReportFormComponent } from './report-form/report-form.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    PagesComponent,
    ReportFormComponent,
    NotFoundComponent,
  ],
  imports: [
  TieredMenuModule,
    CommonModule,
    ButtonModule,
    PagesRoutingModule,
    FormsModule,
    InputTextModule,
    SharedModule
  ]
})
export class PagesModule { }
