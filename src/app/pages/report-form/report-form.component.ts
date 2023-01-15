import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  openNewForm: boolean = false; 

  constructor(){}

  ngOnInit(){}

  showDialogForm(){
    console.log(this.openNewForm)
    this.openNewForm = true
  }
}
