import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBtnComponent } from '../svg/nav-btn/nav-btn.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavBtnComponent, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public pageNameMain = environment.PAGE_NAME_MAIN;
  public pageNameWork = environment.PAGE_NAME_WORK;
  public pageNameAbout = environment.PAGE_NAME_ABOUT;
  public mobileMenu = false;

  closeMenu() {
    // @ts-ignore
    const svgAnimation: SVGAnimateElement = document.getElementById('reverse')!;

    if (svgAnimation) {
      svgAnimation.beginElement();
      this.mobileMenu = false;
    }
  }
}
