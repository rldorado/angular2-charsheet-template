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
        <h2>{{hero.name}} character sheet</h2>
        <div><label>ID: </label>{{hero.id}}</div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="hero.name" placeholder="Write the name..">
        </div>
        <div>
            <label>Race: </label>
            <input [(ngModel)]="hero.race" placeholder="Write the race..">
        </div>
        `

})

export class AppComponent {
    title = 'NWNDragonlance characters';
    hero: Hero = {
        id: 1,
        name: 'Louie Loire',
        race: 'Human'
    };
}
