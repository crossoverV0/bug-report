import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Scroll } from '@angular/router';
import { first, take } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  lastItem: any

  constructor(private router: Router,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof Scroll) {
        this.activeRoute(event.routerEvent.url)
      }
    });
  }
  
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

  activeRoute(url: string){
    const index = this.items.findIndex(item => item.link === url)
    if(index > 0){
      this.items[index].active = true
    }
  }
}
