import { Component, input } from '@angular/core';

@Component({
  selector: 'svg-nav-btn',
  imports: [],
  templateUrl: './nav-btn.component.svg',
})
export class NavBtnComponent {
  readonly open = input(false);
}
