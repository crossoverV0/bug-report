import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ReportCardComponent } from '../../shared/components/organisms/report-card/report-card.component';
import { DialogComponent } from 'src/app/shared/components/molecules/dialog/dialog.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
  CommonModule,
  ReportCardComponent,
  DialogComponent
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
      estado: {chave: 'EM_PROGRESSO', valor:'Em progresso', id:1},
      labels: [
        {chave: 'EM_PROGRESSO', valor:'Em progresso', id:1},
        {chave: 'EM_PROGRESSO', valor:'Em progresso', id:1},
        {chave: 'EM_PROGRESSO', valor:'Em progresso e test', id:1}
      ],
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    // {
    //   descricao: 'Erro ao tentar adicionar propriedade a formulário',
    //   estado: {chave: 'DISPONIVEL', valor:'Disponivel',id:2},
    //   responsavel: 'Tiago Menezes',
    //   analista: 'Lucas Silva',
    //   area: 'Front-End'
    // },
    // {
    //   descricao: 'Erro ao tentar editar card',
    //   estado: {chave: 'DISPONIVEL', valor:'Disponivel', id:3},
    //   responsavel: 'Tiago Menezes',
    //   analista: 'Lucas Silva',
    //   area: 'Front-End'
    // },
    // {
    //   descricao: 'Erro ao tentar editar card',
    //   estado: {chave: 'DISPONIVEL', valor:'Disponivel', id:3},
    //   responsavel: 'Tiago Menezes',
    //   analista: 'Lucas Silva',
    //   area: 'Front-End'
    // }
  ]

}
