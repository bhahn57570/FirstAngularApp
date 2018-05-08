import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ben',
  templateUrl: './test-ben.component.html',
  styleUrls: ['./test-ben.component.css']
})
export class TestBenComponent implements OnInit {

  isUnchanged : boolean = true;

  counter : number = 0;

  constructor() { }

  ngOnInit() {
  }

  
  tooggleUnchanged(): void {
    if (this.isUnchanged == true) {
      this.isUnchanged = false;
    } else {
      this.isUnchanged = true;
    }
  }

  getVal(): number {
    return 3;
  }
}
