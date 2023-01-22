import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-standard-dialog',
  templateUrl: './standard-dialog.component.html',
  styleUrls: ['./standard-dialog.component.scss']
})
export class StandardDialogComponent implements OnInit{
  @Input() displayBasic: boolean = false;
  @Input() position: string = 'top';
  @Input() enableCancelButton: boolean = true;
  @Input() enableSendButton: boolean = true;
  @Input() title: string = 'Título padrão'
 
  @Output()
  public onClose: EventEmitter<any> = new EventEmitter()

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showDreg(){
    this.onClose.emit()
  }

  cancel(){
    this.onClose.emit()
  }
}
