import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
  displayBasic: boolean = true; 

  constructor(){}

  ngOnInit(){}

  showBasicDialog() {
    this.displayBasic = true;
  }

  onClose(){
    this.displayBasic = false
  }
}
