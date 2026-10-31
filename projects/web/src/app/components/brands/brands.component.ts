import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  readonly brands = [
    { id: 'jbl', width: 114, height: 66 },
    { id: 'google', width: 114, height: 66 },
    { id: 'haval', width: 114, height: 66 },
    { id: 'kia', width: 114, height: 66 },
    { id: 'ozon', width: 155, height: 66 },
    { id: 'luntik', width: 174, height: 66, desktopOnly: true },
    { id: 'perfetti', width: 183, height: 88 },
    { id: 'abbott', width: 75, height: 88 },
    { id: 'squishmallows', width: 164, height: 88 },
    { id: 'pepsico', width: 155, height: 88 },
  ];
}
