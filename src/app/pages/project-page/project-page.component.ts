import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PepsiCardComponent } from '../../components/pepsi-card/pepsi-card.component';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [PepsiCardComponent, VideoCardComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent {
  public id: string | null;

  constructor(private route: ActivatedRoute, private title: Title) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) title.setTitle(`${this.id.toUpperCase()} — ${environment.SITE_NAME}`);
  }
}
