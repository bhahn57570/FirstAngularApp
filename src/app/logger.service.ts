import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs: string[] = [];

  logInfo(msg: any)  { this.log(`INFO: ${msg}`); }
  logDebug(msg: any) { this.log(`DEBUG: ${msg}`); }
  logError(msg: any) { this.log(`ERROR: ${msg}`, true); }

   log(msg: any, isErr = false) {
    this.logs.push(msg);
    isErr ? console.error(msg) : console.log(msg);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/