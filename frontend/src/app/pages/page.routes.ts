import { Routes } from '@angular/router';
import { LayoutPage } from './layout';
import { HomePage } from './home';
import { PlayersPage } from './players';

let routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'players',
        component: PlayersPage
      }
    ]
  }
];

export const PAGE_ROUTES = routes;