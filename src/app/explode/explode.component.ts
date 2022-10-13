import { Component, OnInit } from '@angular/core';
import {SfxService} from '../sfx.service';

@Component({
  selector: 'app-explode',
  templateUrl: './explode.component.html',
  styleUrls: ['./explode.component.less']
})
export class ExplodeComponent implements OnInit {
  items: string[];

  constructor(private sfx: SfxService) {
    this.items = sfx.getSfxNames();
  }

  ngOnInit(): void {
  }

  play(item: string): void {
    this.sfx.playAfterAll(item);
  }
}
