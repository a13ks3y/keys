import {Component, Input, OnInit} from '@angular/core';
import {AudioService} from "../audio.service";

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.less']
})
export class ChordComponent implements OnInit {
  @Input() chord: String;
  @Input() isPlaying: boolean;
  title: string;
  isHalf: boolean;
  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.chord = this.chord || 'C';
    this.title = this.chord.toString();
    if (this.title.length > 1) {
      this.isHalf = true;
    }

  }

  play() {
    this.audioService.playSingleChord(this.chord.toString());
  }
}
