import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ContactComponent, NgOptimizedImage],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  public name = environment.SITE_NAME;
}
