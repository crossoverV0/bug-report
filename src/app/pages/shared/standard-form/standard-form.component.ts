import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent {
  title: string = 'Título padrão'
  subTitle: string = 'sub título padrão'
}
