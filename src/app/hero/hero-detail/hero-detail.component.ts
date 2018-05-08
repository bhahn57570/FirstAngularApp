import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../../hero.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    this.route.data.forEach(u => console.log('xxx' + JSON.stringify(u, null, 4)));
    const id = +this.route.snapshot.paramMap.get('id');
    
    // this.route.paramMap
    // .switchMap((params: ParamMap) =>
    //   this.service.getHero(params.get('id')));
    
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

// OR IT CAN BE 
// hero$: Observable<Hero>;

// constructor(
//   private route: ActivatedRoute,
//   private router: Router,
//   private service: HeroService
// ) {}

// ngOnInit() {
//   this.hero$ = this.route.paramMap
//     .switchMap((params: ParamMap) =>
//       this.service.getHero(params.get('id')));
// }

// gotoHeroes(hero: Hero) {
//   let heroId = hero ? hero.id : null;
//   // Pass along the hero id if available
//   // so that the HeroList component can select that hero.
//   // Include a junk 'foo' property for fun.
//   this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
// }
}
