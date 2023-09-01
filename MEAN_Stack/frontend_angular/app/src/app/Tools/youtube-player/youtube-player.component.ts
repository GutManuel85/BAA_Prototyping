import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent {

  apiLoaded = false;
  @Input() videoId: String;
  @Input() startSeconds: Number;
  @Input() endSeconds: Number;
  @Input() width: Number;
  @Input() height: Number;

  ngOnInit(){
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
