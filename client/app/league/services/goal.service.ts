import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GoalService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getGoals(): Observable<any> {
    return this.http.get('/api/goals').map(res => res.json());
  }

  countGoals(): Observable<any> {
    return this.http.get('/api/goals/count').map(res => res.json());
  }

  addGoal(goal): Observable<any> {
    return this.http.post('/api/goal', JSON.stringify(goal), this.options);
  }

  getGoal(goal): Observable<any> {
    return this.http.get(`/api/goal/${goal._id}`).map(res => res.json());
  }

  editGoal(goal): Observable<any> {
    return this.http.put(`/api/goal/${goal._id}`, JSON.stringify(goal), this.options);
  }

  deleteGoal(goal): Observable<any> {
    return this.http.delete(`/api/goal/${goal._id}`, this.options);
  }

}
