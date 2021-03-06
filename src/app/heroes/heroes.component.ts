import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];



  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }



  // place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }

  //Observable - asynchronous => wauting fetch data from server
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
