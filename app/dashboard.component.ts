import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-dashboard',
    template: '<h3>My Dashboard</h3>',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    characters: Character[] = [];
    constructor(private characterService: CharacterService) { }
    ngOnInit() {
        this.characterService.getCharacters()
            .then(characters => this.characters = characters.slice(1, 5));
    }
    gotoDetail() { /* not implemented yet */}
}

