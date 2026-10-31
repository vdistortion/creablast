import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { projects } from '../../content/projects';

@Component({
  selector: 'app-work-page',
  imports: [ProjectCardComponent],
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss',
})
export class WorkPageComponent {
  readonly projects = projects;
}
