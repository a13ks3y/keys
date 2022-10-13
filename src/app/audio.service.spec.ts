import { TestBed } from '@angular/core/testing';

import { AudioService } from './audio.service';


describe('AudioService', () => {
  let service: AudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getNoteContext should return AudioContext', () => {
    expect(service.getNoteContext()).toBeInstanceOf(AudioContext);
  });
  it ('noteToFrequency should return frequency for given note', () => {
    expect(service.noteToFrequency('C', 0)).toBe(16.35);
  });
});
