import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { CardsSectionComponent } from 'src/app/shared/components/molecules/cards-section/cards-section.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    CardsSectionComponent
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  constructor(private scroll: ViewportScroller) {}

  @HostListener('window:scroll', []) onScroll() {
    console.log(this.scroll.getScrollPosition())
  }

}
