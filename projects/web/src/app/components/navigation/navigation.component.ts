import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBtnComponent } from '../svg/nav-btn/nav-btn.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  imports: [NavBtnComponent, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  host: {
    '(keydown)': 'onKeydown($event)',
    '(window:resize)': 'onResize($event)',
    '[attr.role]': 'mobileMenu() ? "dialog" : null',
    '[attr.aria-modal]': 'mobileMenu() ? "true" : null',
    '[attr.aria-label]': 'mobileMenu() ? "Site navigation" : null',
  },
})
export class NavigationComponent {
  public pageNameMain = environment.PAGE_NAME_MAIN;
  public pageNameWork = environment.PAGE_NAME_WORK;
  public pageNameAbout = environment.PAGE_NAME_ABOUT;
  readonly mobileMenu = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggleButton');

  toggleMenu(): void {
    if (this.mobileMenu()) {
      this.closeMenu();
    } else {
      this.mobileMenu.set(true);
    }
  }

  closeMenu(): void {
    if (this.mobileMenu()) {
      this.mobileMenu.set(false);
      this.toggleButton().nativeElement.focus();
    }
  }

  onResize(event: Event): void {
    if ((event.target as Window).innerWidth > 800) {
      this.mobileMenu.set(false);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.mobileMenu()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
    } else if (event.key === 'Tab') {
      const elements = Array.from(
        this.host.nativeElement.querySelectorAll<HTMLElement>('a, button'),
      );
      const first = elements[0];
      const last = elements[elements.length - 1];
      const active = this.host.nativeElement.ownerDocument.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
}
