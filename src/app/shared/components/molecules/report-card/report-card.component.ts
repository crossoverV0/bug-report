import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoaderComponent } from './../../../../common/card-loader/card-loader.component';
import { DialogComponent } from '../dialog/dialog.component';
import { TypeInterface } from 'src/app/shared/interfaces/report';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, CardLoaderComponent],
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {  
  isClicked = false;
  @Input() title: string = 'Título padrão de card!'
  @Input() estate: TypeInterface = {chave: 'EM_DEV', valor: 'em dev', id:1}
  @Input() labels: any[] = []
  @Input() id: any = undefined

  openMasterDetails: boolean = false
  action: string = 'Iniciar'

  ngOnInit(){}

  openContent(){
    this.openMasterDetails = true
  }

  onClick(){
    switch(this.estate.chave) {
      case 'DISPONIVEL':
        this.estate.chave = 'EM_PROGRESSO'
        this.action = 'Finalizar'
        break;
      case 'EM_PROGRESSO':
        this.estate.chave = 'FINALIZADO'
        break;
    }
  }

}
