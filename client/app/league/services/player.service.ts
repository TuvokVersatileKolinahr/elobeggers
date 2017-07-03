import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player } from '../models/player';

@Injectable()
export class PlayerService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPlayers(): Observable<any> {
    return this.http.get('/api/players').map(res => res.json());
  }

  countPlayers(): Observable<any> {
    return this.http.get('/api/players/count').map(res => res.json());
  }

  addPlayer(player: Player): Observable<any> {
    player.elo = 1500;
    player.joinDate = new Date();
    return this.http.post('/api/player', JSON.stringify(player), this.options);
  }

  getPlayer(player): Observable<Player> {
    return this.http.get(`/api/player/${player._id}`).map(res => res.json());
  }

  getPlayerById(id: String): Observable<Player> {
    return this.http.get(`/api/player/${id}`).map(res => res.json());
  }

  editPlayer(player): Observable<any> {
    return this.http.put(`/api/player/${player._id}`, JSON.stringify(player), this.options);
  }

  deletePlayer(player): Observable<any> {
    return this.http.delete(`/api/player/${player._id}`, this.options);
  }

}
