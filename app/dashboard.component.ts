import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    characters: Character[] = [];
    constructor(
        private router: Router,
        private characterService: CharacterService) { }
    ngOnInit() {
        this.characterService.getCharacters()
            .then(characters => this.characters = characters.slice(1, 5));
    }
    gotoDetail(char: Character) {
        let link = ['CharacterDetail', { id: char.id }];
        this.router.navigate(link);
    }

}

