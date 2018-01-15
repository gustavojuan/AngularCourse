import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }from '@angular/router';
import { Heroe, HeroesService } from  '../../servicios/heroes.service';

@Component({
  selector: 'app-searchheroe',
  templateUrl: './searchheroe.component.html'
})
export class SearchheroeComponent implements OnInit {

  heroes:Heroe[];
  termino:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private _heroesService:HeroesService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.termino = params.termino
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }

  verHeroe(i:number)  {
    this.router.navigate(['/heroe',i]);
  }


}
