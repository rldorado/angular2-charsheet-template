import { Injectable } from '@angular/core';

import { CHARACTERS } from './mock-characters';

@Injectable()
export class CharacterService {
    getCharacters() {
        return Promise.resolve(CHARACTERS);
    }
    getCharacter(id: number) {
        return this.getCharacters()
            .then(characters => characters.filter(character => character.id === id)[0]);
    }
}