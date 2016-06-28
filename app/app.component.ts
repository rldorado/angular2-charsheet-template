import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { CharacterService } from './character.service';
import { CharactersComponent } from './characters.component';
import { DashboardComponent } from './dashboard.component';
import { CharacterDetailComponent } from './character-detail.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Characters']">Characters</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CharacterService
    ],
    styleUrls: ['app/app.component.css']
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/characters',
        name: 'Characters',
        component: CharactersComponent
    },
    {
        path: '/detail/:id',
        name: 'CharacterDetail',
        component: CharacterDetailComponent
    }
])

export class AppComponent {
    title = 'Character sheets';
}
