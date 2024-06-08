import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  public brands: string[] = [
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
  public desktopOnly: string[] = ['luntik'];
}
