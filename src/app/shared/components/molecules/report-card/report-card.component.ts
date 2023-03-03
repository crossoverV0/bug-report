import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoaderComponent } from './../../../../common/card-loader/card-loader.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, CardLoaderComponent, DialogComponent],
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent {
  @Input() title: string = 'Título padrão de card!'
  @Input() data: any = {
    id: 'sdkjfksldajfsda',
    descricao: 'descricao padrão',
    labels: [
      {
        chave: 'status',
        valor: 'Novo'
      },
      {
        chave: 'area',
        valor: 'Front-end'
      }
    ],
    estado: {
      chave: "DISPONIVEL",
      valor: "Disponível"
    }
  }
  openMasterDetails: boolean = false
  estate = this.data.estado?.chave || 'teste'
  action: string = 'Iniciar'
  labels = this.data.labels

  openContent(){
    this.openMasterDetails = true
  }

  onClick(){
    switch(this.estate) {
      case 'DISPONIVEL':
        this.estate = 'EM_PROGRESSO'
        this.action = 'Finalizar'
        break;
      case 'EM_PROGRESSO':
        this.estate = 'FINALIZADO'
        break;
    }
  }
}
