import { Component, OnInit } from '@angular/core';
import { KeyComponent } from "../key/key.component";
import {AudioService} from "../audio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  noteOctave: number = 3;
  noteDetune: number = 0;
  noteWaveType: string = 'sine';
  waveTypes: string[] = ['triangle', 'sine', 'sawtooth', 'square'];
  noteGainTargetValue: number = 0.0001;
  isVertical: boolean = false;
  noteLength: number = 666;
  notesPlaying = {
    'C': false,
    'C#': false,
    'D': false,
    'Eb': false,
    'E': false,
    'F': false,
    'F#': false,
    'G': false,
    'G#': false,
    'A': false,
    'Bb': false,
    'B': false
  }
  chordsPlaying = {
    'C': false,
    'C#': false,
    'D': false,
    'Eb': false,
    'E': false,
    'F': false,
    'F#': false,
    'G': false,
    'G#': false,
    'A': false,
    'Bb': false,
    'B': false,
    'C7': false,
    'D7': false,
    'E7': false,
    'F7': false,
    'G7': false,
    'A7': false,
    'B7': false,
  }

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    document.body.addEventListener('keyup', this.onKeyUp.bind(this));
    document.body.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  ngDoCheck(): void {
    this.audioService.setNoteDetune(this.noteDetune);
    this.audioService.setNoteWaveType(this.noteWaveType);
    this.audioService.setNoteOctave(this.noteOctave);
    this.audioService.setGainTargetValue(this.noteGainTargetValue);
    this.audioService.setNoteLength(this.noteLength);
  }
  onKeyDown($event: KeyboardEvent) {
    const note = this.audioService.keyToNote($event);
    if (note && note.length) {
      this.notesPlaying[note] = true;
      this.audioService.startNote(note, this.noteOctave);
    }
    const chord = this.audioService.keyToChord($event);
    if (chord && !this.chordsPlaying[chord]) {
      this.chordsPlaying[chord] = true;
      this.audioService.playSingleChord(chord);
    }
 }
  onKeyUp($event: KeyboardEvent) {
    const note = this.audioService.keyToNote($event);
    if (note && note.length) {
      this.notesPlaying[note] = false;
      this.audioService.endNote(note, this.noteOctave);
    }
    const chord = this.audioService.keyToChord($event);
    if (chord && this.chordsPlaying[chord]) {
      this.chordsPlaying[chord] = false;
    }

  }

  shuffle() {
    /*
  noteOctave: number = 3;
  noteDetune: number = 0;
  noteWaveType: string = 'sine';
  waveTypes: string[] = ['triangle', 'sine', 'sawtooth', 'square'];
  noteGainTargetValue: number = 0.0001;
  isVertical: boolean = false;
  noteLength: number = 666;
      * */
    this.noteOctave = ~~(Math.random() * 8);
    this.noteDetune = ~~(Math.random() * 9600 * 2) - 9600;
    this.noteWaveType = this.waveTypes[~~(Math.random() * this.waveTypes.length)];
    this.noteGainTargetValue = Math.random();
    this.noteLength = ~~(Math.random() * 2400) + 333;
  }
}
