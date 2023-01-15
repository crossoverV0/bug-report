import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent {
 @Input() title: string = 'Título padrão'
 @Input() subTitle: string = 'sub título padrão'
}
