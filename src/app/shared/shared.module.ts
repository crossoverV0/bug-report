import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/organisms/sidenav/sidenav.component';
import { ToolsbarComponent } from './components/organisms/toolsbar/toolsbar.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ToolsbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
