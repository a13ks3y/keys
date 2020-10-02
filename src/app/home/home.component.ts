import { Component, OnInit } from '@angular/core';
import { KeyComponent } from "../key/key.component";
import {AudioService} from "../audio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  octave: number = 3;
  noteDetune: number = 0;
  noteWaveType: string = 'sine';
  waveTypes: string[] = ['triangle', 'sine', 'sawtooth', 'square'];

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    document.body.addEventListener('keyup', this.onKeyUp.bind(this));
    document.body.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  ngDoCheck(): void {
    this.audioService.setNoteDetune(this.noteDetune);
    this.audioService.setNoteWaveType(this.noteWaveType);
  }

  onKeyUp($event: KeyboardEvent) {
    const note = this.audioService.keyToNote($event);
    if (note && note.length) {
      console.log('endNote', note);
      this.audioService.endNote(note, this.octave);
    }
  }
  onKeyDown($event: KeyboardEvent) {
    const note = this.audioService.keyToNote($event);
    if (note && note.length) {
      console.log('startNote', note);
      this.audioService.startNote(note, this.octave);
    }
  }
}
