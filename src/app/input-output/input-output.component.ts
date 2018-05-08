import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { InputOutput } from '../inputoutput';
import { AdService }         from '../ad.service';
import { AdItem }            from '../ad-item';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  console = console;

  @Input() inputtest: InputOutput;

  @Input() valeurTest: string;

  @Input('master') masterName: string;

  @Output() outputTest: EventEmitter<string> = new EventEmitter();

  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  bleuFont: boolean = true;
  redBack: boolean = false;
  italicFont: number = 1;

  names = ['Mr. IQ', '   ', '  Bombasto  '];

  ads: AdItem[];

  constructor(private adService: AdService) {}


  outputAString() {
    console.log("edooedo");
    this.outputTest.emit("Je fais un output");
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.italicFont++;
    this.setCurrentClasses();
  }

  ngOnInit() {

    this.setCurrentClasses();
    this.setCurrentStyles();
    this.ads = this.adService.getAds();

  }

  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'bleuFont': this.bleuFont,
      'redBack': this.redBack,
      'italicFont': this.italicFont == 3
    };
  }

  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  true     ? 'italic' : 'normal',
      'font-weight': !true ? 'bold'   : 'normal',
      'font-size':   true    ? '24px'   : '12px'
    };
  }

}

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  private _name = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
}

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}