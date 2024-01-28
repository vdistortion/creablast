import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BrandsComponent } from '../../components/brands/brands.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BrandsComponent, ContactComponent, RouterLink, NgOptimizedImage],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
