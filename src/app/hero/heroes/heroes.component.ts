import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroStatic: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  heroes: Hero[];

  heroes$: Observable<Hero[]>;

  private selectedId: number;

  constructor(private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);


    // this.heroes$ = this.route.paramMap
    // .switchMap((params: ParamMap) => {
    //   // (+) before `params.get()` turns the string into a number
    //   this.selectedId = +params.get('id');
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      }));
  }

}