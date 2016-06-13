import { Component, Input } from '@angular/core';

import { Character } from './character';

@Component({
    selector: 'my-character-detail',
    template: `
    <div *ngIf="character">
            <h2>Ficha de personaje de {{character.name}}</h2>
                <div><label>ID: </label>{{character.id}}</div>
            <div>
                <label>Nombre: </label>
                <input [(ngModel)]="character.name" placeholder="Escribe el nombre.."/>
            </div>
        <div>
            <label>Raza: </label>
            <input [(ngModel)]="character.race" placeholder="Escribe la raza.."/>
        </div>
    </div>
    `
})
export class CharacterDetailComponent {
    @Input()
    character: Character;
}