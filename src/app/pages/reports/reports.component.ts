import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
  items: MenuItem[] = [];
  displayBasic: boolean = false;
  data: any = {}
  selectedProduct1: any;

  enableShowMaterDetail: boolean = false

  products: any[] = [
    {
      data: 22/0o4/2002,
      remetente: 'Luiz Inácio',
      categoria: 'bug',
      status: 'Em desenvolvimento'
    },
    {
      data: 22/0o4/2002,
      remetente: 'Maria Cardoso',
      categoria: 'bug',
      status: 'Em desenvolvimento'
    },
    {
      data: 22/0o4/2002,
      remetente: 'Daniel Furlan',
      categoria: 'task',
      status: 'Concluído'
    },
    {
      data: 22/0o4/2002,
      remetente: 'Daniel Furlan',
      categoria: 'bug',
      status: 'Concluído'
    },
  ];



  constructor(){}

  ngOnInit(){
    this.items = [
      {label: 'Atualizar', icon: 'pi pi-refresh', command: () => {this.update();}},
  ];
  }

  update(){}
  save(){}
  
  showBasicDialog() {
    this.displayBasic = true;
  }

  onClose(){
    this.displayBasic = false
    this.enableShowMaterDetail = false
  }

  onRowSelect(e: any){
    this.showMaterDetail(e.data)
  }

  showMaterDetail(data: any){
    this.enableShowMaterDetail = true
    this.data = data
    console.log(this.data)
  }
  
}
