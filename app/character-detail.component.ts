import { Component, Input, OnInit } from '@angular/core';

import { Character } from './character';

import { RouteParams } from '@angular/router-deprecated';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-character-detail',
    templateUrl: 'app/character-detail.component.html',
    styleUrls: ['app/character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    @Input()
    character: Character;

    constructor(
        private characterService: CharacterService,
        private routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.characterService.getCharacter(id)
            .then(character => this.character = character);
    }
    goBack() {
        window.history.back();
    }

}