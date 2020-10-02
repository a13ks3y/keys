import {Component, Input, OnInit} from '@angular/core';
import {AudioService} from "../audio.service";

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.less']
})
export class KeyComponent implements OnInit {
  @Input() note: String;
  title: string;
  isHalf: boolean;

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.note = this.note || 'C';
    this.title = this.note.toString();
    if (this.title.length > 1) {
      this.isHalf = true;
    }
  }

  play() {
    this.audioService.playSingleNote(this.note.toString());
  }
}
