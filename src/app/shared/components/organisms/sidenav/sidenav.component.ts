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
      name: 'Tarefas',
      link: '/tarefas',
      id: 1,
      active: false
    },
    {
      name: 'BUGs',
      link: '/bugs',
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
      console.log(event)
      const index = this.items.findIndex(item => item.id === this.lastItem.id)
      this.items[index].active = false
    }
    const item = this.items.filter(item => item.link == event)[0]
    this.lastItem = item
    item.active = true
    // this.router.navigateByUrl(`${event}`, { skipLocationChange: true })
  }
}
