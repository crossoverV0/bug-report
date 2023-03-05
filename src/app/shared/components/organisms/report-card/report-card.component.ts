import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoaderComponent } from '../../../../common/card-loader/card-loader.component';
import { DialogComponent } from '../../molecules/dialog/dialog.component';
import { TypeInterface } from 'src/app/shared/interfaces/report';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, CardLoaderComponent, DialogComponent],
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {  
  public isClicked = false;
  public openModal: boolean = false
  
  @Input() title: string = 'Título padrão de card!'
  @Input() estate: TypeInterface = {chave: 'EM_DEV', valor: 'em dev', id:1}
  @Input() labels: any[] = []
  @Input() id: any = undefined


  ngOnInit(){}
  openContent(){}
  returnReport(){}
}
