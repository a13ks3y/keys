import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SfxService {
  rootEl: HTMLDivElement;
  isPlaying: boolean;
  playlist: string[] = [];
  sfxSrcMap: any = {
    explosion: './src/assets/sfx/explosion.wav',
    battle_sounds: './src/assets/sfx/battle_sounds.wav',
    bigboom: './src/assets/sfx/bigboom.wav',
    blkfoot4: './src/assets/sfx/blkfoot4.wav',
    bomb: './src/assets/sfx/bomb.wav',
    expl05: './src/assets/sfx/expl05.wav',
    explode: './src/assets/sfx/explode.wav',
    explode1: './src/assets/sfx/explode1.wav',
    Explosion7: './src/assets/sfx/Explosion7.wav',
    kablooie: './src/assets/sfx/kablooie.wav',
    kaboom: './src/assets/sfx/kaboom.wav',
  };
  sfxElMap: any = {};
  constructor() {
    this.rootEl = document.createElement('div');
    this.rootEl.style.display = 'none';
    Object.keys(this.sfxSrcMap).forEach(name => {
      const value = this.sfxSrcMap[name];
      const audioEl: HTMLAudioElement = document.createElement('audio');
      audioEl.src = value;
      audioEl.title = name;
      audioEl.autoplay = false;
      audioEl.id = `sfx_${name}`;
      audioEl.addEventListener('load', () => {
        console.log(name, 'is loaded');
      });
      this.sfxElMap[name] = audioEl;
      this.rootEl.appendChild(audioEl);
    });
    document.body.appendChild(this.rootEl);
  }
  playAfterAll(name: string): void {
    if (this.sfxElMap[name]) {
      this.playlist.unshift(name);
      console.log('add', name, 'in playlist');
    }
    this.playNext();
  }
  playNext(): void {
    if (this.isPlaying) { return; }
    const playNext = this.playlist.pop();
    const audioEl: HTMLAudioElement = this.sfxElMap[playNext];
    if (audioEl) {
      this.isPlaying = true;
      console.log('try to play', playNext);
      audioEl.play().finally(() => {
        this.isPlaying = false;
        this.playNext();
      });
    }
  }
  getSfxNames(): string[] {
    return Object.keys(this.sfxSrcMap);
  }
}
