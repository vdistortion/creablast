import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PepsiCardComponent } from '../../components/pepsi-card/pepsi-card.component';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { Project } from '../../content/projects';

@Component({
  selector: 'app-project-page',
  imports: [PepsiCardComponent, VideoCardComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent {
  readonly project = toSignal(
    inject(ActivatedRoute).data.pipe(map((data) => data['project'] as Project)),
  );
}
