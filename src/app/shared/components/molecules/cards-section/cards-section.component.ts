import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-cards-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent {
  
  cards: any[] = [
    {
      titulo: 'Erro ao tentar editar card',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    },
    {
      titulo: 'Erro ao tentar adicionar propriedade a formulário',
      responsavel: 'Tiago Menezes',
      analista: 'Lucas Silva',
      area: 'Front-End'
    }
  ]

}
