"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var character_1 = require('./character');
var CharacterDetailComponent = (function () {
    function CharacterDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], CharacterDetailComponent.prototype, "character", void 0);
    CharacterDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-character-detail',
            template: "\n    <div *ngIf=\"character\">\n            <h2>Ficha de personaje de {{character.name}}</h2>\n                <div><label>ID: </label>{{character.id}}</div>\n            <div>\n                <label>Nombre: </label>\n                <input [(ngModel)]=\"character.name\" placeholder=\"Escribe el nombre..\"/>\n            </div>\n        <div>\n            <label>Raza: </label>\n            <input [(ngModel)]=\"character.race\" placeholder=\"Escribe la raza..\"/>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());
exports.CharacterDetailComponent = CharacterDetailComponent;
//# sourceMappingURL=character-detail.component.js.map