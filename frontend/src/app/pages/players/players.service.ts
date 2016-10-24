import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Player, PLAYERS } from './';

// const PLAYERS: Player[] = [
//   { id: 1, name: 'Luke Skywalker', elo: 177, email: "lukes@jedirebels.org" },
//   { id: 2, name: 'Darth Vader', elo: 200, email: "dvader@darkside.com" },
//   { id: 3, name: 'Han Solo', elo: 185, email: "hansolo@falcon.net" },
// ];



@Injectable()
export class PlayersService {
  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('/api/players');
  }

  get(id: string): Player {
    return this.clone(PLAYERS.find(p => p.id === id));
  }

  save(player: Player) {
    let originalPlayer = PLAYERS.find(p => p.id === player.id);
    if (originalPlayer) Object.assign(originalPlayer, player);
    // saved muahahaha
  }

  private clone(object: any) {
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
