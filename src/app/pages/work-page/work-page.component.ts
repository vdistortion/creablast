import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss',
})
export class WorkPageComponent {}
