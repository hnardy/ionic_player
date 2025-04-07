import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  togglePlay() {
    const audio = this.audioPlayer.nativeElement;

    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    this.isPlaying = !this.isPlaying;
  }
}
