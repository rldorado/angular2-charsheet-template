import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
    race: string;
}

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <div *ngIf="selectedHero">
            <h2>Ficha de personaje de {{hero.name}}</h2>
            <div><label>ID: </label>{{hero.id}}</div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="Escribe el nombre.."/>
            </div>
            <div>
                <label>Race: </label>
                <input [(ngModel)]="selectedHero.race" placeholder="Escribe la raza.."/>
            </div>
        </div>
        <h2>Mis personajes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                <!-- each hero goes here -->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        `,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]


})

export class AppComponent {
    title = 'Personajes';
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
    public heroes = HEROES;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Glenn es-Vulcano", "race": "Minotauro" },
    { "id": 12, "name": "Veranya", "race": "Humano" },
    { "id": 13, "name": "Anciek", "race": "Semielfo" },
    { "id": 14, "name": "Shirlyn", "race": "Kender" },
    { "id": 15, "name": "Lionel Melodía", "race": "Humano" },
    { "id": 16, "name": "Zilkoz", "race": "Goblin" },
    { "id": 17, "name": "Daenisse", "race": "Elfo qualinesti" },
    { "id": 18, "name": "Darion Zadig", "race": "Humano" },
    { "id": 19, "name": "Yibraël Laznamür", "race": "Semielfo" },
    { "id": 20, "name": "Rydhez Harramist", "race": "Humano" }
];
