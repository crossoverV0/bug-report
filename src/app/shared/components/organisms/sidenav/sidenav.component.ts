import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  lastItem: any

  constructor(private router: Router){}
  
  @Input() items: any[] = [
    {
      name: 'Run',
      link: '/run',
      id: 0,
      active: false
    },
    {
      name: 'Tarefas',
      link: '/tarefas',
      id: 1,
      active: false
    },
    {
      name: 'Relatórios',
      link: '/relatorios',
      id: 2,
      active: false
    },
    {
      name: 'Calls',
      link: '/calls',
      id: 3,
      active: false
    },
  ]

  onClickItem(event: any){
    if(this.lastItem){
      const index = this.items.findIndex(item => item.id === this.lastItem.id)
      this.items[index].active = false
    }
    const item = this.items.filter(item => item.link == event)[0]
    this.lastItem = item
    item.active = true
    this.router.navigateByUrl(`${event}`, { skipLocationChange: true })
  }
}
