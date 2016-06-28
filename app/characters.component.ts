import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterDetailComponent } from './character-detail.component';

import { CharacterService } from './character.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-characters',
    templateUrl: 'app/characters.component.html',
    styles:['app/characters.component.css'],
    directives: [CharacterDetailComponent]

})

export class CharactersComponent implements OnInit {
    title = 'Personajes';
    selectedChar: Character;
    characters: Character[];


    constructor(
        private router: Router,
        private characterService: CharacterService) { }

    getCharacters() {
        this.characterService.getCharacters().then(characters => this.characters = characters); //Promesa
    }

    ngOnInit() {
        this.getCharacters();
    }

    onSelect(char: Character) { this.selectedChar = char; }

    gotoDetail() {
        this.router.navigate(['CharacterDetail', { id: this.selectedChar.id }]);
    }
}


