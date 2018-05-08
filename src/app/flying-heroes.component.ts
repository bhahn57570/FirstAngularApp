import { Component }              from '@angular/core';

import { SOLDIERS }                 from './hero';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesComponent {
  soldiers: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
    // Pure pipe won't update display because soldiers array reference is unchanged
    // Impure pipe will display
    this.soldiers.push(hero);
    } else {
      // Pipe updates display because soldiers array is a new object
      this.soldiers = this.soldiers.concat(hero);
    }
  }

  reset() { this.soldiers = SOLDIERS.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/