import {AudioService} from "./audio.service";

enum LoopItemType {
  startNote,
  endNote,
  playSingleNote,
  playSingleChord
}

class LoopItem {
  msStartTime: number
  msEndTime: number
  msDuration: number
  type: LoopItemType
  private readonly note: string;
  private readonly octave: number;
  constructor(note: string, octave: number, options: Object) {
    this.note = note;
    this.octave = octave;
    Object.assign(this, options);
  }

  isTheSameAs(item: LoopItem) {
    return this.note === item.note && this.octave === this.octave;
  }

  play(audioService: AudioService) {
    if (this.type == LoopItemType.startNote) {
      audioService.startNote(this.note, this.octave);
      setTimeout(() => {
        audioService.endNote(this.note, this.octave);
      }, this.msDuration);
    }
  }
}

class LoopItemStartNote extends LoopItem {
  constructor(note: string, octave: number, options: Object) {
    super(note, octave, options);
    this.type = LoopItemType.startNote;
  }
}
class LoopItemEndNote extends LoopItem {
  constructor(note: string, octave: number, options: Object) {
    super(note, octave, options);
    this.type = LoopItemType.startNote;
  }
}
// @todo: Unit-test Loop class!
export class Loop {
    items: LoopItem[] = [];
    index: number;
    msStartTime: number;
    msEndTime: number;
    msDuration: number;
    isPlaying: boolean = false;
  private _playInterval: number;
    constructor(private audioService: AudioService) {
      this.msStartTime = Date.now();
    }
    endRecord() {
      this.msEndTime = Date.now();
      this.msDuration = this.msEndTime - this.msStartTime;
      this.items.filter(item => item.type == LoopItemType.startNote).forEach(item => {
        const endItem = this.items.find(i => i.isTheSameAs(item) && i.type == LoopItemType.endNote);
        if (endItem) {
          item.msDuration = endItem.msEndTime - item.msStartTime;
          console.log('msDuration', item.msDuration);
        } else {
          item.msDuration = 66.6;
        }
      });
    }
    play() {
      this.isPlaying = true;
      const startItems = this.items.filter(item => item.type == LoopItemType.startNote);
      const msStartItemsTotalDuration = startItems.reduce((a, c) => {
        return a + c.msDuration;
      }, 0);

      this._playInterval = setInterval(() => {
        startItems.forEach(startItem => {
          const msOffset = startItem.msStartTime - this.msStartTime;
          setTimeout(() => {
            startItem.play(this.audioService);
          }, msOffset);
        });
      }, msStartItemsTotalDuration); // this.msDuration instead?

      /*
      const currentItem = this.items[0];
      const msDuration = currentItem.msStartTime - this.msStartTime;
      setTimeout(() => {
        currentItem.play(this.audioService);

      }, msDuration);
      * */

    }
    stop() {
      this.isPlaying = false;
      if (this._playInterval) {
        clearInterval(this._playInterval);
      }
    }

  startNote(note: string, noteOctave: number) {
      const item = new LoopItemStartNote(note, noteOctave, {
        msStartTime: Date.now(),
        detune: this.audioService.getNoteDetune()
      });
      this.items.push(item);
  }
  endNote(note: string, noteOctave: number) {
    const item = new LoopItemEndNote(note, noteOctave, {
      msEndTime: Date.now()
    });
    this.items.push(item);
  }
}
