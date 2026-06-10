import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  public brands = [
    'jbl',
    'google',
    'haval',
    'kia',
    'ozon',
    'luntik',
    'perfetti',
    'abbott',
    'squishmallows',
    'pepsico',
  ];
  public desktopOnly = ['luntik'];
}
