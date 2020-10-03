import {Injectable} from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private _noteContext: AudioContext;

  public static  notes = {
    'C': [16.35, 32.70, 65.41, 130.8, 261.6, 523.3, 1047, 2093, 4186],
    'C#': [17.32, 34.65, 69.30, 138.6, 277.2, 554.4, 1109, 2217, 4435],
    'D': [18.35, 36.71, 73.42, 146.8, 293.7, 587.3, 1175, 2349, 4699],
    'Eb': [19.45, 38.89, 77.78, 155.6, 311.1, 622.3, 1245, 2489, 4978],
    'E': [20.60, 41.20, 82.41, 164.8, 329.6, 659.3, 1319, 2637, 5274],
    'F': [21.83, 43.65, 87.31, 174.6, 349.2, 698.5, 1397, 2794, 5588],
    'F#': [23.12, 46.25, 92.50, 185.0, 370.0, 740.0, 1480, 2960, 5920],
    'G': [24.50, 49.00, 98.00, 196.0, 392.0, 784.0, 1568, 3136, 6272],
    'G#': [25.96, 51.91, 103.8, 207.7, 415.3, 830.6, 1661, 3322, 6645],
    'A': [27.50, 55.00, 110.0, 220.0, 440.0, 880.0, 1760, 3520, 7040],
    'Bb': [29.14, 58.27, 116.5, 233.1, 466.2, 932.3, 1865, 3729, 7459],
    'B': [30.87, 61.74, 123.5, 246.9, 493.9, 987.8, 1976, 3951, 7902]
  }

  public static chords = {
    'C': ['C', 'E', 'G'],
    'C#': ['C#', 'G#', 'F'],
    'D': ['D', 'F#', 'A'],
    'Eb': ['Eb', 'G', 'Bb'],
    'E': ['E', 'G#', 'B'],
    'F': ['F', 'A', 'C'], // K
    'F#': ['F#', 'Bb', 'C#'],
    'G': ['G', 'D', 'B'],
    'G#': ['G#', 'E', 'B'],
    'A': ['A', 'C', 'F'],
    'Bb': ['Bb', 'D', 'F'],
    'B':  ['B', 'Eb', 'F#'],

    'C7': ['Bb', 'C', 'E', 'G'],
    'D7': ['F#', 'A', 'C', 'D'],
    'E7': ['E', 'G#', 'B', 'D'],
    'F7': ['F', 'A', 'C', 'Eb'],
    'G7': ['G', 'B', 'D', 'F'],
    'A7': ['A', 'C#', 'E', 'G'],
    'B7': ['B', 'Eb', 'F#', 'A']

  }

  public static keysToNotes = {
    'q': 'C',
    'w': 'C#',
    'e': 'D',
    'r': 'Eb',
    't': 'E',
    'y': 'F',
    'u': 'F#',
    'i': 'G',
    'o': 'G#',
    'p': 'A',
    '[': 'Bb',
    ']': 'B',

    'Q': 'C+1',
    'W': 'C#+1',
    'E': 'D+1',
    'R': 'Eb+1',
    'T': 'E+1',
    'Y': 'F+1',
    'U': 'F#+1',
    'I': 'G+1',
    'O': 'G#+1',
    'P': 'A+1',
    '{': 'Bb+1',
    '}': 'B+1',

    'Shift+Q': 'C-1',
    'Shift+W': 'C#-1',
    'Shift+E': 'D-1',
    'Shift+R': 'Eb-1',
    'Shift+T': 'E-1',
    'Shift+Y': 'F-1',
    'Shift+U': 'F#-1',
    'Shift+I': 'G-1',
    'Shift+O': 'G#-1',
    'Shift+P': 'A-1',
    'Shift+{': 'Bb-1',
    'Shift+}': 'B-1',
  }
  public static keysToChords = {
    'a': 'C',
    's': 'C#',
    'd': 'D',
    'f': 'Eb',
    'g': 'E',
    'h': 'F',
    'j': 'F#',
    'k': 'G',
    'l': 'G#',
    ';': 'A',
    '\'': 'Bb',
    '\\': 'B',
    'z': 'C7',
    'x': 'D7',
    'c': 'E7',
    'v': 'F7',
    'b': 'G7',
    'n': 'A7',
    'm': 'B7',

    'A': 'C+1',
    'S': 'C#+1',
    'D': 'D+1',
    'F': 'Eb+1',
    'G': 'E+1',
    'H': 'F+1',
    'J': 'F#+1',
    'K': 'G+1',
    'L': 'G#+1',
    ':': 'A+1',
    '"': 'Bb+1',
    '|': 'B+1',
    'Z': 'C7+1',
    'X': 'D7+1',
    'C': 'E7+1',
    'V': 'F7+1',
    'B': 'G7+1',
    'N': 'A7+1',
    'M': 'B7+1',

    'Shift+A': 'C-1',
    'Shift+S': 'C#-1',
    'Shift+D': 'D-1',
    'Shift+F': 'Eb-1',
    'Shift+G': 'E-1',
    'Shift+H': 'F-1',
    'Shift+J': 'F#-1',
    'Shift+K': 'G-1',
    'Shift+L': 'G#-1',
    'Shift+:': 'A-1',
    'Shift+"': 'Bb-1',
    'Shift+|': 'B-1',
    'Shift+Z': 'C7-1',
    'Shift+X': 'D7-1',
    'Shift+C': 'E7-1',
    'Shift+V': 'F7-1',
    'Shift+B': 'G7-1',
    'Shift+N': 'A7-1',
    'Shift+M': 'B7-1',
  }
  private _notesPlaying = {}
  private _noteDetune: number = 0;
  private _noteWaveType: OscillatorType = "sine"
  private _noteOctave: number = 3;
  private _gainTargetValue: number = 0.0000001;
  private _noteLength: number = 666;

  constructor() { }

  getNoteContext(): AudioContext {
    return this._noteContext ? this._noteContext : (this._noteContext = new AudioContext());
  }

  noteToFrequency(note: string, octave: number): number {
    octave = octave || 0;
    return AudioService.notes[note][octave];
  }

  startNote(note: string, octave: number = 3) {
    if (note.includes('+1')) {
      octave += 1;
      note = note.replace('+1', '')
    }
    const key = note + ':' + octave;
    if (!this._notesPlaying[key]) {
      const noteFrequency = AudioService.notes[note][octave];
      const context = this.getNoteContext();
      const o = context.createOscillator();
      o.frequency.value = noteFrequency;
      o.type = this._noteWaveType;
      o.detune.value = this._noteDetune;
      //o.detune.linearRampToValueAtTime(this._noteDetune, context.currentTime);
      const g = context.createGain();
      o.connect(g);
      g.connect(context.destination);
      o.start(0);
      o.detune.linearRampToValueAtTime(666, context.currentTime + 0.666);

      this._notesPlaying[key] = {
          o, g, t: context.currentTime
      };
    } else {
      // todo ???
    }
  }

  endNote(note:string, octave: number = 3) {
    if (note.includes('+1')) {
      octave += 1;
      note = note.replace('+1', '')
    }
    if (note.includes('-1')) {
      octave += 1;
      note = note.replace('-1', '')
    }
    const key = note + ':' + octave;
    const length = 1 /  this._noteLength;
    if (this._notesPlaying[key]) {
      const {g, o, t} = this._notesPlaying[key];
      g.gain.exponentialRampToValueAtTime(this._gainTargetValue, t + length);
      this._notesPlaying[key] = null;
      setTimeout(() => {
        //this._notesPlaying[key] = null;
        o.stop();
      }, length * 1200 );
    } else {
      // todo ???
    }
  }
  playSingleNote(note: string, octave: number = 3, msLength: number = 666) {
    this.startNote(note, octave);
    setTimeout(() => {
      this.endNote(note, octave);
    }, msLength);
  }

  /*
  playSingleNote(note: string, octave: number = 3, msLength: number = 666) {
    if (msLength === 0) msLength = 333;
    if (note.includes('+1')) {
      octave += 1;
      note = note.replace('+1', '')
    }
    if (note.includes('-1')) {
      octave -= 1;
      note = note.replace('-1', '')
    }
    const noteFrequency = AudioService.notes[note][octave];
    const context = this.getNoteContext();
    const o = context.createOscillator();
    o.frequency.value = noteFrequency;
    o.type = this._noteWaveType;
    o.detune.linearRampToValueAtTime(this._noteDetune, context.currentTime + (msLength / 1000));
    const g = context.createGain();
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    setTimeout(() => {
      g.gain.exponentialRampToValueAtTime(this._gainTargetValue, context.currentTime + (msLength / 1000));
      setTimeout(() => {
        o.stop();
      }, msLength);
    }, msLength);
  }
   */

  keyToNote($event: KeyboardEvent):string {
    let key = $event.key;
    return AudioService.keysToNotes[key];
  }

  keyToChord($event: KeyboardEvent) {
    let key = $event.key;
    return AudioService.keysToChords[key];
  }

  setNoteDetune(noteDetune: number) {
    this._noteDetune = noteDetune;
    // todo do with playing notes?
  }

  setNoteWaveType(noteWaveType: string) {
    this._noteWaveType = noteWaveType as OscillatorType;
    // todo do with playing notes?
  }
  setNoteOctave(noteOctave: number) {
    this._noteOctave = noteOctave;
    // todo do with playing notes?
  }
  setGainTargetValue(gainTargetValue: number) {
    this._gainTargetValue = gainTargetValue;
    // todo do with playing notes?
  }

  playSingleChord(chord: string) {
    let octave = this._noteOctave;
    if (chord.includes('+1')) {
      octave += 1;
      chord = chord.replace('+1', '');
    }
    if (chord.includes('-1')) {
      octave -= 1;
      chord = chord.replace('-1', '');
    }
    const chordNotes = AudioService.chords[chord];
    if (chordNotes && chordNotes.length) {
      this.playSingleNote(chordNotes[0], octave, this._noteLength);
      chordNotes.forEach((note, i) => {
        this.playSingleNote(note, octave, i == 0 ? this._noteLength : this._noteLength * 0.96);
      })

    }
  }


  setNoteLength(noteLength: number) {
    this._noteLength = noteLength;
  }
}
