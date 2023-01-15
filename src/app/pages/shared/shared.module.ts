import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardFormComponent } from './standard-form/standard-form.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    StandardFormComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule
  ],
  exports: [
    StandardFormComponent
  ]
})
export class SharedModule { }
