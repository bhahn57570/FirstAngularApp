import { Component, HostBinding } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  template:  `
  <p>TEST COMPOSE 2</p>
  <button (click)="cancel()">Cancel</button>
  `,
  styles: [ ':host { position: relative; bottom: 10%; }' ]
})
export class ComposeMsgComponent {


  constructor(private router: Router) {}

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popupTest: null }}]);
  }
}
