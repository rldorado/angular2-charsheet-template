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
var router_deprecated_1 = require('@angular/router-deprecated');
var character_service_1 = require('./character.service');
var CharacterDetailComponent = (function () {
    function CharacterDetailComponent(characterService, routeParams) {
        this.characterService = characterService;
        this.routeParams = routeParams;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.characterService.getCharacter(id)
            .then(function (character) { return _this.character = character; });
    };
    CharacterDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], CharacterDetailComponent.prototype, "character", void 0);
    CharacterDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-character-detail',
            templateUrl: 'app/character-detail.component.html',
            styleUrls: ['app/character-detail.component.css']
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService, router_deprecated_1.RouteParams])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());
exports.CharacterDetailComponent = CharacterDetailComponent;
//# sourceMappingURL=character-detail.component.js.map