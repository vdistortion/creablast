import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input({ required: true }) id: string | null;

  public videos: any = {
    wish: 'ucEP9Of57Xg',
    jbl: 'Yo-fkk8n_YA',
    kia: 'Crwv5BxKISA',
    afcon: 'Ml-ywUosb2w',
    meller: '9ruI23-4Q_k',
  };
}
