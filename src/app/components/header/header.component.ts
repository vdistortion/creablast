import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public siteName = environment.SITE_NAME;
}
