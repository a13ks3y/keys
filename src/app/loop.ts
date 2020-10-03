class LoopItem {

}

export class Loop {
    items: LoopItem[] = [];
    index: number;
    msStartTime: number;
    msEndTime: number;
    msDuration: number;
    isPlaying: boolean = false;
    constructor() {
      this.msStartTime = Date.now();
    }
    endRecord() {
      this.msEndTime = Date.now();
      this.msDuration = this.msEndTime - this.msStartTime;
    }
    play() {
      this.isPlaying = true;
    }
    stop() {
      this.isPlaying = false;
    }
}
