import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <main>
      <h1>Page not found</h1>
      <p>This page does not exist. <a routerLink="/work">Explore my projects</a>.</p>
    </main>
  `,
})
export class NotFoundPageComponent {}
