import { debounceTime, map, filter } from 'rxjs/operators';
import { Component, Inject, Optional, ViewChild, TemplateRef } from '@angular/core';
import { Hero } from './hero';
import { InputOutput } from './inputoutput';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NavigationEnd, Router } from "@angular/router";
import { APP_CONFIG, AppConfig } from './app.config';
import { Logger } from './logger.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleNull : string;

  birthday = new Date(1988, 3, 15); // April 15, 1988

  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }

  power = 5;
  factor = 1;

  color: string;

  heroImageUrl = 'assets/images/tortue.jpg'

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  heroStaticToTest: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroStaticToTestNull: Hero;

  heroStaticToTestNullName: Hero = {
    id: 3,
    name: null
  };

  fontSizePx: number = 22;

  inputtestVar: InputOutput = {
    id: 56,
    name: 'ooo',
    title: 'oddeeldoe title'
  };

  actionName: string = "Fermer";

  templateToggle = true;
  
  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate};

  @ViewChild('defaultTabButtons')
  private defaultTabButtonsTpl: TemplateRef<any>;

  onOutput() {
    console.log("Je fais un output")
  }
  ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
}
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    @Inject(APP_CONFIG) config: AppConfig,
    @Optional() private logger: Logger
  ) {
    if (this.logger) {
      this.logger.log("Je log");
    }

    console.log("config title : " + config.title);
    console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPP')

    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.forEach(u => console.log('xxx' + JSON.stringify(u, null, 4)));
    route.paramMap.subscribe(u => console.log('xxx' + JSON.stringify(u, null, 4)));

    this.route.queryParamMap.subscribe(x=>console.log(x.keys))
    this.router.events.subscribe

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((event:NavigationEnd) => console.log('xxx' + JSON.stringify(event, null, 4)))
      // .map(() => this.route)
      // .map(routed => routed.data.forEach(u => console.log('xxx' + JSON.stringify(u, null, 4)))
      // .subscribe((event) => this.titleService.setTitle(event['title']));
      ;
      // .map(route => {
      //   while (route.firstChild) route = route.firstChild;
      //   return route;
      // })
      // .filter(route => route.outlet === 'primary')
      // .mergeMap(route => route.data)
      // .mergeMap(data => this.translate.get(data['titleKey']))
      // .subscribe(translation => this.titleService.setTitle(translation));
  }

}
