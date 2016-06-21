import { Injectable } from '@angular/core';

import { CHARACTERS } from './mock-characters';

@Injectable()
export class CharacterService {
    getCharacters() {
        return Promise.resolve(CHARACTERS);
    }
}