(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiismirnov/Documents/js/keys/src/main.ts */"zUnb");


/***/ }),

/***/ "8o4z":
/*!**************************************!*\
  !*** ./src/app/key/key.component.ts ***!
  \**************************************/
/*! exports provided: KeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyComponent", function() { return KeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio.service */ "hz2C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1) { return { "key-half": a0, "active": a1 }; };
const _c1 = function (a0) { return { backgroundColor: a0 }; };
class KeyComponent {
    constructor(audioService) {
        this.audioService = audioService;
        this.isGood = false;
        this.isBad = false;
    }
    ngOnInit() {
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
KeyComponent.ɵfac = function KeyComponent_Factory(t) { return new (t || KeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_audio_service__WEBPACK_IMPORTED_MODULE_1__["AudioService"])); };
KeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyComponent, selectors: [["app-key"]], inputs: { note: "note", isPlaying: "isPlaying", isGood: "isGood", isBad: "isBad", color: "color" }, decls: 3, vars: 8, consts: [[1, "key", 3, "ngClass", "ngStyle", "click"], [1, "key__title"]], template: function KeyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyComponent_Template_div_click_0_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.isHalf, ctx.isPlaying))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".home__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #666;\n}\n.key.active[_ngcontent-%COMP%], .key.key-half.active[_ngcontent-%COMP%] {\n  background: #f90;\n}\n.key[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.333rem;\n  background: white;\n  font-weight: bold;\n  font-family: monospace;\n  font-size: 32px;\n  min-width: 64px;\n  line-height: 64px;\n  vertical-align: middle;\n  min-height: 64px;\n  text-align: center;\n  color: black;\n  border: 1px solid #666;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n@media (max-width: 940px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 28px;\n    min-width: 58px;\n    min-height: 58px;\n    line-height: 58px;\n    margin: 0.111rem;\n  }\n}\n@media (max-width: 600px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 24px;\n    min-width: 56px;\n    min-height: 56px;\n    line-height: 56px;\n    margin: 0.111rem;\n  }\n}\n@media (max-width: 400px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 16px;\n    min-width: 28px;\n    min-height: 32px;\n    line-height: 32px;\n    margin: 0;\n  }\n}\n.key.key-half[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpc21pcm5vdi9Eb2N1bWVudHMvanMva2V5cy9zcmMvYXBwL2tleS9rZXkuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2tleS9rZXkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDQTs7RUFDRSxnQkFBQTtBQ0VGO0FEQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUFBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNFRjtBQUNGO0FEQUU7RUFBQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDR0Y7QUFDRjtBREZFO0VBQUE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxTQUFBO0VDS0Y7QUFDRjtBREhBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9rZXkva2V5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG59XG4ua2V5LmFjdGl2ZSwgLmtleS5rZXktaGFsZi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjkwO1xufVxuLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjMzM3JlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDMycHg7XG4gIG1pbi13aWR0aDogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1pbi13aWR0aDogNThweDtcbiAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgIG1hcmdpbjogMC4xMTFyZW07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAwLjExMXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAyOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ua2V5LmtleS1oYWxmIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuIiwiLmhvbWVfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG59XG4ua2V5LmFjdGl2ZSxcbi5rZXkua2V5LWhhbGYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2Y5MDtcbn1cbi5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC4zMzNyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtaW4td2lkdGg6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAua2V5IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWluLXdpZHRoOiA1OHB4O1xuICAgIG1pbi1oZWlnaHQ6IDU4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgbWFyZ2luOiAwLjExMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDAuMTExcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmtleSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1pbi13aWR0aDogMjhweDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmtleS5rZXktaGFsZiB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-key',
                templateUrl: './key.component.html',
                styleUrls: ['./key.component.less']
            }]
    }], function () { return [{ type: _audio_service__WEBPACK_IMPORTED_MODULE_1__["AudioService"] }]; }, { note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isGood: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isBad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop */ "lBZb");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.service */ "hz2C");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../key/key.component */ "8o4z");
/* harmony import */ var _chord_chord_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chord/chord.component */ "NU/h");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _loop_loop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loop/loop.component */ "hNiF");












function HomeComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const waveType_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.noteWaveType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](waveType_r2);
} }
function HomeComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loop", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loop_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", loop_r3);
} }
class HomeComponent {
    constructor(audioService) {
        this.audioService = audioService;
        this.noteOctave = 3;
        this.noteDetune = 0;
        this.noteWaveType = 'square';
        this.waveTypes = ['triangle', 'sine', 'sawtooth', 'square'];
        this.noteGainTargetValue = 0.000000000001;
        this.isVertical = false;
        this.noteLength = 666;
        this.notesPlaying = {
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
        };
        this.chordsPlaying = {
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
        };
        this.loops = [];
    }
    ngOnInit() {
        document.body.addEventListener('keyup', this.onKeyUp.bind(this));
        document.body.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    ngDoCheck() {
        this.audioService.setNoteDetune(this.noteDetune);
        this.audioService.setNoteWaveType(this.noteWaveType);
        this.audioService.setNoteOctave(this.noteOctave);
        this.audioService.setGainTargetValue(this.noteGainTargetValue);
        this.audioService.setNoteLength(this.noteLength);
    }
    onKeyDown($event) {
        const note = this.audioService.keyToNote($event);
        if (note && note.length) {
            this.notesPlaying[note] = true;
            this.audioService.startNote(note, this.noteOctave);
            if (this.currentLoop) {
                this.currentLoop.startNote(note, this.noteOctave);
            }
        }
        const chord = this.audioService.keyToChord($event);
        if (chord && !this.chordsPlaying[chord]) {
            this.chordsPlaying[chord] = true;
            this.audioService.playSingleChord(chord);
        }
    }
    onKeyUp($event) {
        const note = this.audioService.keyToNote($event);
        if (note && note.length) {
            this.notesPlaying[note] = false;
            this.audioService.endNote(note, this.noteOctave);
        }
        const chord = this.audioService.keyToChord($event);
        if (chord && this.chordsPlaying[chord]) {
            this.chordsPlaying[chord] = false;
        }
        if ($event.code == 'Space') {
            if (this.currentLoop) {
                if ($event.shiftKey) {
                    this.endRecordLoopNotPlayIt();
                }
                else {
                    this.endRecordLoopAndPlayIt();
                }
            }
            else {
                this.startRecordLoop();
            }
        }
    }
    shuffle() {
        this.noteOctave = ~~(Math.random() * 8);
        this.noteDetune = ~~(Math.random() * 9600 * 2) - 9600;
        this.noteWaveType = this.waveTypes[~~(Math.random() * this.waveTypes.length)];
        this.noteGainTargetValue = 1 / ((Math.random() * 256) + 128);
        this.noteLength = ~~(Math.random() * 2400) + 333;
    }
    startRecordLoop() {
        this.currentLoop = new _loop__WEBPACK_IMPORTED_MODULE_1__["Loop"](this.audioService);
    }
    endRecordLoopAndPlayIt() {
        if (this.currentLoop) {
            const loop = this.currentLoop;
            loop.endRecord();
            loop.play();
            this.loops.push(loop);
            loop.index = this.loops.length;
            this.currentLoop = null;
        }
    }
    endRecordLoopNotPlayIt() {
        const loop = this.currentLoop;
        loop.endRecord();
        this.loops.push(loop);
        loop.index = this.loops.length;
        this.currentLoop = null;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 132, consts: [[1, "home__container"], [3, "max", "min", "step", "value", "thumbLabel", "vertical", "valueChange"], [3, "max", "min", "step", "thumbLabel", "value", "vertical", "valueChange"], ["appearance", "fill"], [3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "keys"], [3, "note", "isPlaying"], [1, "chords"], [3, "color", "chord", "isPlaying"], [1, "loops"], [3, "hidden", "click"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [3, "loop"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_slider_valueChange_2_listener($event) { return ctx.noteOctave = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_slider_valueChange_3_listener($event) { return ctx.noteLength = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_slider_valueChange_4_listener($event) { return ctx.noteDetune = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_slider_valueChange_5_listener($event) { return ctx.noteGainTargetValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Note wave type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-key", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-chord", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_54_listener() { return ctx.startRecordLoop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Start Record Loop (Space)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_56_listener() { return ctx.endRecordLoopAndPlayIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "End Record Loop And Play It (Space)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_58_listener() { return ctx.endRecordLoopNotPlayIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "End Record Loop And NOT Play It (Shift+Space)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HomeComponent_li_61_Template, 2, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_62_listener() { return ctx.shuffle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Shuffle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 8)("min", 0)("step", 1)("value", ctx.noteOctave)("thumbLabel", true)("vertical", ctx.isVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1666)("min", 333)("step", 666 / 55.5)("value", ctx.noteLength)("thumbLabel", true)("vertical", ctx.isVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 4800)("min", -4800)("step", 50)("thumbLabel", true)("value", ctx.noteDetune)("vertical", ctx.isVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 0.01)("min", -1e-12)("step", 1e-9)("thumbLabel", true)("value", ctx.noteGainTargetValue)("vertical", ctx.isVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Note wave type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.waveTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "C")("isPlaying", ctx.notesPlaying["C"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "C#")("isPlaying", ctx.notesPlaying["C#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "D")("isPlaying", ctx.notesPlaying["D"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "Eb")("isPlaying", ctx.notesPlaying["Eb"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "E")("isPlaying", ctx.notesPlaying["E"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "F")("isPlaying", ctx.notesPlaying["F"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "F#")("isPlaying", ctx.notesPlaying["F#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "G")("isPlaying", ctx.notesPlaying["G"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "G#")("isPlaying", ctx.notesPlaying["G#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "A")("isPlaying", ctx.notesPlaying["A"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "Bb")("isPlaying", ctx.notesPlaying["Bb"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "B")("isPlaying", ctx.notesPlaying["B"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f00")("chord", "C")("isPlaying", ctx.chordsPlaying["C"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f63")("chord", "C#")("isPlaying", ctx.chordsPlaying["C#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f90")("chord", "D")("isPlaying", ctx.chordsPlaying["D"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f96")("chord", "Eb")("isPlaying", ctx.chordsPlaying["Eb"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#ff0")("chord", "E")("isPlaying", ctx.chordsPlaying["E"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#0f0")("chord", "F")("isPlaying", ctx.chordsPlaying["F"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#0f9")("chord", "F#")("isPlaying", ctx.chordsPlaying["F#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#09f")("chord", "G")("isPlaying", ctx.chordsPlaying["G"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#69f")("chord", "G#")("isPlaying", ctx.chordsPlaying["G#"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#00f")("chord", "A")("isPlaying", ctx.chordsPlaying["A"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f9f")("chord", "Bb")("isPlaying", ctx.chordsPlaying["Bb"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f0f")("chord", "B")("isPlaying", ctx.chordsPlaying["B"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f00")("chord", "Cm")("isPlaying", ctx.chordsPlaying["Cm"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f90")("chord", "Dm")("isPlaying", ctx.chordsPlaying["Dm"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#ff0")("chord", "Em")("isPlaying", ctx.chordsPlaying["Em"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#0f0")("chord", "Fm")("isPlaying", ctx.chordsPlaying["Fm"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#09f")("chord", "Gm")("isPlaying", ctx.chordsPlaying["Gm"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#00f")("chord", "Am")("isPlaying", ctx.chordsPlaying["Am"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f0f")("chord", "Bm")("isPlaying", ctx.chordsPlaying["Bm"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f00")("chord", "C7")("isPlaying", ctx.chordsPlaying["C7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f90")("chord", "D7")("isPlaying", ctx.chordsPlaying["D7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#ff0")("chord", "E7")("isPlaying", ctx.chordsPlaying["E7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#0f0")("chord", "F7")("isPlaying", ctx.chordsPlaying["F7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#09f")("chord", "G7")("isPlaying", ctx.chordsPlaying["G7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#00f")("chord", "A7")("isPlaying", ctx.chordsPlaying["A7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#f0f")("chord", "B7")("isPlaying", ctx.chordsPlaying["B7"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !!ctx.currentLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.currentLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.currentLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loops);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _key_key_component__WEBPACK_IMPORTED_MODULE_7__["KeyComponent"], _chord_chord_component__WEBPACK_IMPORTED_MODULE_8__["ChordComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _loop_loop_component__WEBPACK_IMPORTED_MODULE_10__["LoopComponent"]], styles: [".home__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.mat-slider[_ngcontent-%COMP%] {\n  margin: 32px auto auto;\n  max-width: 90%;\n  display: block;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.keys[_ngcontent-%COMP%], .chords[_ngcontent-%COMP%] {\n  background: linear-gradient(-66.6deg, #666 0%, #999 50%, #666 100%);\n  padding: 12px 0;\n  text-align: center;\n}\n.loops[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpc21pcm5vdi9Eb2N1bWVudHMvanMva2V5cy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGO0FERUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUY7QURFQTtFQUNFLFdBQUE7QUNBRjtBREdBOztFQUVFLG1FQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FDRkY7QURNQTtFQUVJLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWF0LXNsaWRlciB7XG4gIG1hcmdpbjogMzJweCBhdXRvIGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ua2V5cywgLmNob3JkcyB7XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC02Ni42ZGVnLCAjNjY2IDAlLCAjOTk5IDUwJSwgIzY2NiAxMDAlKTtcbiAgLy9iYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4ubG9vcHMge1xuICB1bCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cbiIsIi5ob21lX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0LXNsaWRlciB7XG4gIG1hcmdpbjogMzJweCBhdXRvIGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmtleXMsXG4uY2hvcmRzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC02Ni42ZGVnLCAjNjY2IDAlLCAjOTk5IDUwJSwgIzY2NiAxMDAlKTtcbiAgcGFkZGluZzogMTJweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9vcHMgdWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return [{ type: _audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NU/h":
/*!******************************************!*\
  !*** ./src/app/chord/chord.component.ts ***!
  \******************************************/
/*! exports provided: ChordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordComponent", function() { return ChordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio.service */ "hz2C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1) { return { "key-half": a0, "active": a1 }; };
const _c1 = function (a0) { return { backgroundColor: a0 }; };
class ChordComponent {
    constructor(audioService) {
        this.audioService = audioService;
    }
    ngOnInit() {
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
ChordComponent.ɵfac = function ChordComponent_Factory(t) { return new (t || ChordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_audio_service__WEBPACK_IMPORTED_MODULE_1__["AudioService"])); };
ChordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChordComponent, selectors: [["app-chord"]], inputs: { chord: "chord", isPlaying: "isPlaying", color: "color" }, decls: 3, vars: 8, consts: [[1, "key", 3, "ngClass", "ngStyle", "click"], [1, "key__title"]], template: function ChordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChordComponent_Template_div_click_0_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.isHalf, ctx.isPlaying))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".key.active[_ngcontent-%COMP%], .key.key-half.active[_ngcontent-%COMP%] {\n  background: #f90;\n}\n.key[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.333rem;\n  background: white;\n  font-weight: bold;\n  font-family: monospace;\n  font-size: 32px;\n  min-width: 64px;\n  line-height: 64px;\n  vertical-align: middle;\n  min-height: 64px;\n  text-align: center;\n  text-shadow: black 1px 1px;\n  color: black;\n  border: 1px solid #666;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n@media (max-width: 940px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 28px;\n    min-width: 58px;\n    min-height: 58px;\n    line-height: 58px;\n    margin: 0.111rem;\n  }\n}\n@media (max-width: 600px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 24px;\n    min-width: 56px;\n    min-height: 56px;\n    line-height: 56px;\n    margin: 0.111rem;\n  }\n}\n@media (max-width: 400px) {\n  .key[_ngcontent-%COMP%] {\n    font-size: 16px;\n    min-width: 28px;\n    min-height: 32px;\n    line-height: 32px;\n    margin: 0;\n  }\n}\n.key.key-half[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpc21pcm5vdi9Eb2N1bWVudHMvanMva2V5cy9zcmMvYXBwL2Nob3JkL2Nob3JkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jaG9yZC9jaG9yZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDRSxnQkFBQTtBQ0VGO0FEQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQUE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0dGO0FBQ0Y7QURERTtFQUFBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNJRjtBQUNGO0FESEU7RUFBQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFNBQUE7RUNNRjtBQUNGO0FESkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2Nob3JkL2Nob3JkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleS5hY3RpdmUsIC5rZXkua2V5LWhhbGYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2Y5MDtcbn1cbi5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC4zMzNyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtaW4td2lkdGg6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1pbi13aWR0aDogNThweDtcbiAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgIG1hcmdpbjogMC4xMTFyZW07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAwLjExMXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAyOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ua2V5LmtleS1oYWxmIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi5rZXkuYWN0aXZlLFxuLmtleS5rZXktaGFsZi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjkwO1xufVxuLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjMzM3JlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDMycHg7XG4gIG1pbi13aWR0aDogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAua2V5IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWluLXdpZHRoOiA1OHB4O1xuICAgIG1pbi1oZWlnaHQ6IDU4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgbWFyZ2luOiAwLjExMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDAuMTExcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmtleSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1pbi13aWR0aDogMjhweDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmtleS5rZXktaGFsZiB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chord',
                templateUrl: './chord.component.html',
                styleUrls: ['./chord.component.less']
            }]
    }], function () { return [{ type: _audio_service__WEBPACK_IMPORTED_MODULE_1__["AudioService"] }]; }, { chord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key/key.component */ "8o4z");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _chord_chord_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chord/chord.component */ "NU/h");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _loop_loop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loop/loop.component */ "hNiF");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _key_key_component__WEBPACK_IMPORTED_MODULE_6__["KeyComponent"],
        _chord_chord_component__WEBPACK_IMPORTED_MODULE_10__["ChordComponent"],
        _loop_loop_component__WEBPACK_IMPORTED_MODULE_12__["LoopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _key_key_component__WEBPACK_IMPORTED_MODULE_6__["KeyComponent"],
                    _chord_chord_component__WEBPACK_IMPORTED_MODULE_10__["ChordComponent"],
                    _loop_loop_component__WEBPACK_IMPORTED_MODULE_12__["LoopComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hNiF":
/*!****************************************!*\
  !*** ./src/app/loop/loop.component.ts ***!
  \****************************************/
/*! exports provided: LoopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopComponent", function() { return LoopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop */ "lBZb");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.service */ "hz2C");




class LoopComponent {
    constructor(audioService) {
        this.audioService = audioService;
        if (!this.loop)
            this.loop = new _loop__WEBPACK_IMPORTED_MODULE_1__["Loop"](this.audioService);
    }
    ngOnInit() {
    }
    togglePlay() {
        if (this.loop) {
            if (this.loop.isPlaying) {
                this.loop.stop();
            }
            else {
                this.loop.play();
            }
        }
    }
}
LoopComponent.ɵfac = function LoopComponent_Factory(t) { return new (t || LoopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"])); };
LoopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoopComponent, selectors: [["app-loop"]], inputs: { loop: "loop" }, decls: 3, vars: 3, consts: [[3, "click"]], template: function LoopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoopComponent_Template_button_click_1_listener() { return ctx.togglePlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Loop #", ctx.loop.index, " Duration: ", ctx.loop.msDuration / 1000, " seconds.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loop.isPlaying ? "Pause" : "Play");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvb3AvbG9vcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loop',
                templateUrl: './loop.component.html',
                styleUrls: ['./loop.component.less']
            }]
    }], function () { return [{ type: _audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"] }]; }, { loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hz2C":
/*!**********************************!*\
  !*** ./src/app/audio.service.ts ***!
  \**********************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// Каждый морковный охотник жовто-горяче желает знать где ультрамариновый сидит индиго-фазан
// C      C#        D       Eb           E     F     G    G#              A     G#     B
// C       D         E      F       G    A    B
// красный оранжевый желтый зеленый где сидит фазан
class AudioService {
    constructor() {
        this._notesPlaying = {};
        this._noteDetune = 0;
        this._noteWaveType = "sine";
        this._noteOctave = 3;
        this._gainTargetValue = 0.0000001;
        this._noteLength = 666;
    }
    getNoteContext() {
        try {
            const audioContextClassName = 'AudioContext';
            const webkitAudioContextClassName = 'webkitAudioContext';
            return this._noteContext ?
                this._noteContext :
                (this._noteContext = new (window[audioContextClassName] || window[webkitAudioContextClassName])());
        }
        catch (e) {
            alert('Wtf?' + e);
        }
    }
    noteToFrequency(note, octave) {
        octave = octave || 0;
        return AudioService.notes[note][octave];
    }
    startNote(note, octave = 3) {
        if (note.includes('+1')) {
            octave += 1;
            note = note.replace('+1', '');
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
            //o.detune.linearRampToValueAtTime(666, context.currentTime + 0.666);
            this._notesPlaying[key] = {
                o, g, t: context.currentTime
            };
        }
        else {
            // todo ???
        }
    }
    endNote(note, octave = 3) {
        if (note.includes('+1')) {
            octave += 1;
            note = note.replace('+1', '');
        }
        if (note.includes('-1')) {
            octave -= 1;
            note = note.replace('-1', '');
        }
        const key = note + ':' + octave;
        const length = 0.8 + 0.1 / this._noteLength;
        if (this._notesPlaying[key]) {
            const { g, o, t } = this._notesPlaying[key];
            //g.gain.linearRampToValueAtTime(this._gainTargetValue, t + length);
            g.gain.exponentialRampToValueAtTime(this._gainTargetValue, t + length);
            this._notesPlaying[key] = null;
            setTimeout(() => {
                //this._notesPlaying[key] = null;
                o.stop();
            }, 666 + this._noteLength);
        }
        else {
            // todo ???
        }
    }
    playSingleNote(note, octave = 3, msLength = 666) {
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
    keyToNote($event) {
        let key = $event.key;
        return AudioService.keysToNotes[key];
    }
    keyToChord($event) {
        let key = $event.key;
        return AudioService.keysToChords[key];
    }
    setNoteDetune(noteDetune) {
        this._noteDetune = noteDetune;
        // todo do with playing notes?
    }
    setNoteWaveType(noteWaveType) {
        this._noteWaveType = noteWaveType;
        // todo do with playing notes?
    }
    setNoteOctave(noteOctave) {
        this._noteOctave = noteOctave;
        // todo do with playing notes?
    }
    setGainTargetValue(gainTargetValue) {
        this._gainTargetValue = gainTargetValue;
        // todo do with playing notes?
    }
    playSingleChord(chord) {
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
            });
        }
    }
    setNoteLength(noteLength) {
        this._noteLength = noteLength;
    }
    getNoteDetune() {
        return this._noteDetune;
    }
}
AudioService.notes = {
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
};
AudioService.chords = {
    'C': ['C+1', 'C', 'E+1', 'G+1', 'C', 'E', 'G'],
    'C#': ['C#', 'G#', 'F'],
    'D': ['D', 'F#', 'A'],
    'Eb': ['Eb', 'G', 'Bb'],
    'E': ['E', 'G#', 'B'],
    'F': ['F', 'A', 'C'],
    'F#': ['F#', 'Bb', 'C#'],
    'G': ['G', 'D', 'B'],
    'G#': ['G#', 'E', 'B'],
    'A': ['A', 'C', 'F'],
    'Bb': ['Bb', 'D', 'F'],
    'B': ['B', 'Eb', 'F#'],
    'Cm': ['C', 'Eb', 'G'],
    'Dm': ['D', 'F', 'A'],
    'Em': ['E', 'G', 'B'],
    'Fm': ['F', 'G#', 'C'],
    'Gm': ['G', 'C#', 'B'],
    'Am': ['A', 'B-1', 'F'],
    'Bm': ['B', 'D', 'F#'],
    'C7': ['Bb', 'C', 'E', 'G'],
    'D7': ['F#', 'A', 'C', 'D'],
    'E7': ['E', 'G#', 'B', 'D'],
    'F7': ['F', 'A', 'C', 'Eb'],
    'G7': ['G', 'B', 'D', 'F'],
    'A7': ['A', 'C#', 'E', 'G'],
    'B7': ['B', 'Eb', 'F#', 'A']
};
AudioService.keysToNotes = {
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
};
AudioService.keysToChords = {
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
    'z': 'Cm',
    'x': 'Dm',
    'c': 'Em',
    'v': 'Fm',
    'b': 'Gm',
    'n': 'Am',
    'm': 'Bm',
    /*
        'z': 'C7',
        'x': 'D7',
        'c': 'E7',
        'v': 'F7',
        'b': 'G7',
        'n': 'A7',
        'm': 'B7',
    */
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
    ///*
    'Z': 'C7',
    'X': 'D7',
    'C': 'E7',
    'V': 'F7',
    'B': 'G7',
    'N': 'A7',
    'M': 'B7',
    //*/
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
};
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lBZb":
/*!*************************!*\
  !*** ./src/app/loop.ts ***!
  \*************************/
/*! exports provided: Loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loop", function() { return Loop; });
var LoopItemType;
(function (LoopItemType) {
    LoopItemType[LoopItemType["startNote"] = 0] = "startNote";
    LoopItemType[LoopItemType["endNote"] = 1] = "endNote";
    LoopItemType[LoopItemType["playSingleNote"] = 2] = "playSingleNote";
    LoopItemType[LoopItemType["playSingleChord"] = 3] = "playSingleChord";
})(LoopItemType || (LoopItemType = {}));
class LoopItem {
    constructor(note, octave, options) {
        this.note = note;
        this.octave = octave;
        Object.assign(this, options);
    }
    isTheSameAs(item) {
        return this.note === item.note && this.octave === this.octave;
    }
    play(audioService) {
        if (this.type == LoopItemType.startNote) {
            audioService.startNote(this.note, this.octave);
            setTimeout(() => {
                audioService.endNote(this.note, this.octave);
            }, this.msDuration);
        }
    }
}
class LoopItemStartNote extends LoopItem {
    constructor(note, octave, options) {
        super(note, octave, options);
        this.type = LoopItemType.startNote;
    }
}
class LoopItemEndNote extends LoopItem {
    constructor(note, octave, options) {
        super(note, octave, options);
        this.type = LoopItemType.startNote;
    }
}
// @todo: Unit-test Loop class!
class Loop {
    constructor(audioService) {
        this.audioService = audioService;
        this.items = [];
        this.isPlaying = false;
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
            }
            else {
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
    startNote(note, noteOctave) {
        const item = new LoopItemStartNote(note, noteOctave, {
            msStartTime: Date.now(),
            detune: this.audioService.getNoteDetune()
        });
        this.items.push(item);
    }
    endNote(note, noteOctave) {
        const item = new LoopItemEndNote(note, noteOctave, {
            msEndTime: Date.now()
        });
        this.items.push(item);
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map