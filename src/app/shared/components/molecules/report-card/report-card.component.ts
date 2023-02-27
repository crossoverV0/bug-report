import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportInterface } from './../../../interfaces/report';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule],
templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent {
  @Input() data: ReportInterface = {
    descricao: 'descricao padrão'
  }
}
