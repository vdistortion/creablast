import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pepsi-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pepsi-card.component.html',
  styleUrl: './pepsi-card.component.scss',
})
export class PepsiCardComponent {
  public pptx = environment.LINK_PPTX;
}
