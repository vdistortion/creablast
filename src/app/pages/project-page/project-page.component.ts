import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PepsiCardComponent } from '../../components/pepsi-card/pepsi-card.component';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [PepsiCardComponent, VideoCardComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent {
  public id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
