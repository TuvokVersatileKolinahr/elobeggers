import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './league/games/games.component';
import { PlayersComponent } from './league/players/players.component';
import { AboutComponent } from './skeleton/about/about.component';
import { RegisterComponent } from './skeleton/register/register.component';
import { LoginComponent } from './skeleton/login/login.component';
import { LogoutComponent } from './skeleton/logout/logout.component';
import { AccountComponent } from './skeleton/account/account.component';
import { AdminComponent } from './skeleton/admin/admin.component';
import { NotFoundComponent } from './skeleton/not-found/not-found.component';

import { AuthGuardLogin } from './skeleton/services/auth-guard-login.service';
import { AuthGuardAdmin } from './skeleton/services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'games', component: GamesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
