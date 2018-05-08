/* tslint:disable:one-line*/
import { InjectionToken } from '@angular/core';

export const TITLE = new InjectionToken<string>('title');

import { Component, Inject } from '@angular/core';

import { DateLoggerService } from './date-logger.service';
import { Hero }              from './hero';
import { HeroService }       from './hero.service';
import { Logger }     from './logger.service';
import { MinimalLogger }     from './minimal-logger.service';
import { RUNNERS_UP,
         runnersUpFactory }  from './runners-up';

// const someHero =  id: 1,
// name: 'Windstorm'new Hero(42, 'Magrfrfma');
const someHero: Hero = {
  id: 595,
  name: 'Windddddstorm'
};
@Component({
  selector: 'app-hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  providers: [
    { provide: Hero,          useValue:    someHero },
    { provide: TITLE,         useValue:   'Hero of the Month' },
    { provide: HeroService,   useClass:    HeroService },
    { provide: Logger, useClass:    DateLoggerService },
    { provide: MinimalLogger, useExisting: Logger },
    { provide: RUNNERS_UP,    useFactory:  runnersUpFactory(2), deps: [Hero, HeroService] }
  ]
})
export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
      logger: MinimalLogger,
      public heroOfTheMonth: Hero,
      @Inject(RUNNERS_UP) public runnersUp: string,
      @Inject(TITLE) public title: string)
  {
    this.logs = logger.logs;
    logger.logInfo('starting up');
  }
}
