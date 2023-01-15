import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardFormComponent } from './standard-form/standard-form.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { InputTextComponent } from './input-text/input-text.component';
import {InputTextModule} from 'primeng/inputtext';
import { StandardDialogComponent } from './standard-dialog/standard-dialog.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    StandardFormComponent,
    InputTextComponent,
    StandardDialogComponent
  ],
  imports: [
    DialogModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    CardModule
  ],
  exports: [
    StandardDialogComponent,
    StandardFormComponent,
    InputTextComponent
  ]
})
export class SharedModule { }
