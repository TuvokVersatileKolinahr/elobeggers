import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Team } from '../models/team';
import { Player } from '../models/player';

@Injectable()
export class TeamService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getTeams(): Observable<any> {
    return this.http.get('/api/teams').map(res => res.json());
  }

  countTeams(): Observable<any> {
    return this.http.get('/api/teams/count').map(res => res.json());
  }

  addTeam(team: Team): Observable<any> {
    return this.http.post('/api/team', JSON.stringify(team), this.options);
  }

  getTeam(team): Observable<any> {
    return this.http.get(`/api/team/${team._id}`).map(res => res.json());
  }

  getTeamById(id): Observable<any> {
    return this.http.get(`/api/team/${id}`).map(res => res.json());
  }

  editTeam(team): Observable<any> {
    return this.http.put(`/api/team/${team._id}`, JSON.stringify(team), this.options);
  }

  deleteTeam(team): Observable<any> {
    return this.http.delete(`/api/team/${team._id}`, this.options);
  }

}
