import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // 👈 importa o módulo do Ionic

@Component({
  selector: 'app-tab1',
  standalone: true, // 👈 importante no Angular standalone
  imports: [IonicModule], // 👈 registra os componentes Ionic aqui
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isPlaying = false;

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  togglePlay() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.error('Erro ao tocar áudio:', err));
    }
    this.isPlaying = !this.isPlaying;
  }

  nextSong() {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.currentSong = this.songs[this.currentIndex];
    this.setAudioSource();
  }

  prevSong() {
    this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.currentSong = this.songs[this.currentIndex];
    this.setAudioSource();
  }
}
