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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Personajes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>Mis personajes</h2>\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\" \n                [class.selected]=\"hero === selectedHero\" \n                (click)=\"onSelect(hero)\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedHero\">\n            <h2>Ficha de personaje de {{selectedHero.name}}</h2>\n            <div><label>ID: </label>{{selectedHero.id}}</div>\n            <div>\n                <label>Nombre: </label>\n                <input [(ngModel)]=\"selectedHero.name\" placeholder=\"Escribe el nombre..\"/>\n            </div>\n            <div>\n                <label>Raza: </label>\n                <input [(ngModel)]=\"selectedHero.race\" placeholder=\"Escribe la raza..\"/>\n            </div>\n        </div>\n        ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var HEROES = [
    { "id": 11, "name": "Glenn es-Vulcano", "race": "Minotauro" },
    { "id": 12, "name": "Veranya", "race": "Humano" },
    { "id": 13, "name": "Anciek", "race": "Semielfo" },
    { "id": 14, "name": "Shirlyn", "race": "Kender" },
    { "id": 15, "name": "Lionel Melodía", "race": "Humano" },
    { "id": 16, "name": "Zilkoz", "race": "Goblin" },
    { "id": 17, "name": "Daenisse", "race": "Elfo qualinesti" },
    { "id": 18, "name": "Darion Zadig", "race": "Humano" },
    { "id": 19, "name": "Yibraël Laznamür", "race": "Semielfo" },
    { "id": 20, "name": "Rydhez Harramist", "race": "Humano" }
];
//# sourceMappingURL=app.component.js.map