import {Component, Input, OnInit} from '@angular/core';
import {Loop} from "../loop";

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.less']
})
export class LoopComponent implements OnInit {
  @Input() loop: Loop;
  constructor() { }

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
