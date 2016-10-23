import { LayoutPage } from './layout';
import { HomePage } from './home';
import { PlayersPage } from './players';

export * from './layout';
export * from './home';
export * from './players';

export const PAGES: Array<any> = [
  LayoutPage,
  HomePage,
  PlayersPage
];
