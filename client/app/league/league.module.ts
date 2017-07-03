import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GamesComponent } from './games/games.component';
import { PlayersSelectComponent } from './players/select/players-select.component';
import { GameService } from './services/game.service';
import { TeamService } from './services/team.service';
import { GoalService } from './services/goal.service';
import { PlayerService } from './services/player.service';
import { PlayersComponent } from './players/players.component';
import { PlayerShowComponent } from './players/show/player-show.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerSelectFilterPipe } from './players/select/player-select-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // League Components
    GamesComponent,
    PlayersComponent,
    PlayerShowComponent,
    PlayersSelectComponent
  ],
  declarations: [
    GamesComponent,
    PlayersComponent,
    PlayerShowComponent,
    PlayersSelectComponent,
    PlayerSelectFilterPipe
  ],
  providers: [
    GameService,
    TeamService,
    GoalService,
    PlayerService,
    PlayersSelectComponent
  ]
})
export class LeagueModule { }
