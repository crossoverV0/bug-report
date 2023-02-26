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

  ngOnInit(){}

  navigate(route: string){
    this.router.navigate([`${route}`])
  }
}


