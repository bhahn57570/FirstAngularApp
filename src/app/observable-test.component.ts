import { map, filter } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'observable-test',
  template: `
  <h1>TEST OBSERVABLE LOOK CONSOLE</h1>
  <button (click)="testObservable()">Lanch test</button>

  <input id="oulala" placeholder="ssss">
  `
})
export class ObservableComponent implements OnInit {

  public token: Observable<string>;

  testObservable(): void {
    const myObservable = of(1, 2, 3);
    // Observable.of(1, 2, 3);
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    myObservable.subscribe(myObserver);

    myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );


    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(this.sequenceSubscriber);
    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

  
    let imputTest = document.getElementById('oulala') as HTMLInputElement;

    let subscription = fromEvent(imputTest, 'keydown')
      .subscribe((ed: KeyboardEvent) => {
        if (ed.keyCode === ESC_KEY) {
          imputTest.value = '';
        }
      });

    getDataPromise().then(
      data => { // resolve() 
        console.log("Process 1:", data);
        return getDataPromise();
      },
      error => { // reject() 
        console.log("ZZZ" + error);
      }
    )
    // const nums = Observable.of(1, 2, 3);

    let squareValues = map((val: number) => val * val);
    let squaredNums = squareValues(myObservable);

    squaredNums.subscribe(x => console.log(x));

    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );

    // Subscribe to get values
    squareOdd.subscribe(x => console.log(x));

    debugger;

    let rrr = this.toto('BrandsService');
    console.log(rrr);
    console.log(rrr('rr', []));

    let packages$: Observable<string>;
    let searchText$ = new Subject<string>();
  
      

     let packages$$ = searchText$.pipe(
        map(n => n + "AA"),
        map(n => n + "AAss")
      );
      
packages$$.subscribe(

    function (x) { console.log('onNext: ' + x); },
    function (e) { console.log('onError: ' + e.message); },
    function () { console.log('onCompleted'); });
    searchText$.next("eefdfd");
    searchText$.next("eefdfd");
    searchText$.next("eefdfd");
  }



 /** Create curried handleError function that already knows the service name */
 toto = (name = '') => (operation = 'operation', result = {}) => this.handleError(name, operation, result);

  handleError(name = '', operation = 'operation', result = {} ) {
   console.log(name);
   console.log(operation);
   return "ee";
 }
 




  // This function runs when subscribe() is called
  sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return { unsubscribe() { } };
  }


  ngOnInit() {
  }
}
const ESC_KEY = 27;
// const nameInput = document.getElementById('name') as HTMLInputElement;



function fromEvent(target, eventName) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);

    // Add the event handler to the target
    target.addEventListener(eventName, handler);

    return () => {
      // Detach the event handler from the target
      target.removeEventListener(eventName, handler);
    };
  });
}

function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;

  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return (observer) => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      timeoutId = doSequence({
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        complete() {
          // Notify all complete callbacks
          observers.forEach(obs => obs.complete());
        }
      }, seq, 0);
    }

    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      }
    };
  };
}
// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
  return setTimeout(() => {
    observer.next(arr[idx]);
    if (idx === arr.length - 1) {
      observer.complete();
    } else {
      doSequence(observer, arr, idx++);
    }
  }, 1000);
}

// Create a new Observable that will deliver the above sequence
const multicastSequence = new Observable(multicastSequenceSubscriber);

// Subscribe starts the clock, and begins to emit after 1 second
multicastSequence.subscribe({
  next(num) { console.log('1st subscribe: ' + num); },
  complete() { console.log('1st sequence finished.'); }
});

// After 1 1/2 seconds, subscribe again (should "miss" the first value).
setTimeout(() => {
  multicastSequence.subscribe({
    next(num) { console.log('2nd subscribe: ' + num); },
    complete() { console.log('2nd sequence finished.'); }
  });
}, 1500);

// Logs:


type Callback = (error?: Error, data?: number) => void;

function getData(callback: Callback) {
  setTimeout(function setTimeoutCB(counter: number) {
    let oo = Math.random();

    if (oo < 0.60) {
      callback(new Error("Error in retrieving data."));
    }
    else {

      callback(undefined, oo);
    }
  }, 500);
} // getData

type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void;
type PromiseReject = (error?: any) => void;

function getDataPromise() {
  return new Promise((resolve: PromiseResolve<number>, reject: PromiseReject): void => {
    getData((error, data) => {
      if (error) reject(error)
      else resolve(data)
    });
  });
} // getDataPromise