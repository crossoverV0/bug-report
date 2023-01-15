import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private router: Router,
  ){}

  ngOnInit(){
    this.items = [
      {
          label: 'Novo',
          icon: 'pi pi-fw pi-plus',
          items: [
              {label: 'Relatório', icon: 'pi pi-fw pi-file', command: () => {this.navigate('relatorio')}},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Histórico',
        icon: 'pi pi-fw pi-clock',
        command: () => {this.navigate('historico')}
      }
    ];
  }

  navigate(route: string){
    this.router.navigate([`${route}`])
  }
}


