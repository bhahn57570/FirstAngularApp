import { AlertService } from './../alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
      // subscribe to alert messages
      this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy(): void {
      // unsubscribe on destroy to prevent memory leaks
      this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}