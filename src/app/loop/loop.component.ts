import {Component, Input, OnInit} from '@angular/core';
import { AudioService } from '../audio.service';
import {Loop} from '../loop';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.less']
})
export class LoopComponent implements OnInit {
  @Input() loop: Loop;
  constructor(private audioService: AudioService) {    
    if (!this.loop) this.loop = new Loop(this.audioService);
  }

  ngOnInit(): void {
  }

  togglePlay() {
    if (this.loop) {
      if (this.loop.isPlaying) {
        this.loop.stop();
      } else {
        this.loop.play();
      }
    }
  }
}
