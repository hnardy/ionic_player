import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface Song {
  title: string;
  artist: string;
  url: string;
}

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  songs: Song[] = [
    {
      title: 'Dancing In The Street',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/01%20-%20Dancing%20In%20The%20Street.mp3',
    },
    {
      title: "I Can't Wait",
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/02%20-%20I%20Can%27t%20Wait.mp3',
    },
    {
      title: 'Monday Monday',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/03%20-%20Monday%20Monday.mp3',
    },
    {
      title: 'Straight Shooter',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/04%20-%20Straight%20Shooter.mp3',
    },
    {
      title: 'I Call Your Name',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/05%20-%20I%20Call%20Your%20Name.mp3',
    },
    {
      title: 'California Dreamin',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/06%20-%20California%20Dreamin%27.mp3',
    },
    {
      title: 'Somebody Groovy',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/07%20-%20Somebody%20Groovy.mp3',
    },
    {
      title: 'In Crowd',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/08%20-%20In%20Crowd.mp3',
    },
    {
      title: 'My Girl',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/09%20-%20My%20Girl.mp3',
    },
    {
      title: 'Creque Alley',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/10%20-%20Creque%20Alley.mp3',
    },
    {
      title: 'Free Advice',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/11%20-%20Free%20Advice.mp3',
    },
    {
      title: 'Boys & Girls Together',
      artist: 'The Mamas and Papas',
      url: 'https://dn721907.ca.archive.org/0/items/mamaspapas/12%20-%20Boys%20%26%20Girls%20Together.mp3',
    },
    {
      title: 'Gemini Child',
      artist: 'The Mamas and Papas',
      url: 'https://ia801806.us.archive.org/10/items/mamaspapas/13%20-%20Gemini%20child.mp3',
    },

    // Exemplo de outra banda
    {
      title: 'Imagine',
      artist: 'John Lennon',
      url: 'https://archive.org/download/Imagine_201303/01%20Imagine.mp3',
    },
  ];

  currentIndex = 0;
  currentSong: Song = this.songs[this.currentIndex];
  isPlaying = false;

  ngAfterViewInit() {
    this.setAudioSource();
  }

  setAudioSource() {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    audio.src = this.currentSong.url;
    audio.load();
    if (this.isPlaying) {
      audio.play();
    }
  }

  togglePlay() {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
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
