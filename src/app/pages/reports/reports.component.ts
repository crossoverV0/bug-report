import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ReportCardComponent } from './../../shared/components/molecules/report-card/report-card.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
  CommonModule,
  ReportCardComponent
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  constructor(private scroll: ViewportScroller) {}

  @HostListener('window:scroll', []) onScroll() {
    console.log(this.scroll.getScrollPosition())
  }

  cards: any[] = [
    {
      descricao: 'Erro ao tentar editar card',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar adicionar propriedade a formulário',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar editar card',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar adicionar propriedade a formulário',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar adicionar propriedade a formulário',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar editar card',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      descricao: 'Erro ao tentar adicionar propriedade a formulário',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    }
  ]

}
