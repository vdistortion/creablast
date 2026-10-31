import { Component, input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { VideoProject } from '../../content/projects';

@Component({
  selector: 'app-video-card',
  imports: [YouTubePlayer],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  readonly project = input.required<VideoProject>();
}
