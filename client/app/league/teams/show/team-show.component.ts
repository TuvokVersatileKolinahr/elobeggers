import { Component, Input, OnInit } from '@angular/core';

import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.scss']
})
export class TeamShowComponent implements OnInit {
  @Input() teamId: String;
  team: Team = {
    players: ['', ''],
    elo: 1500
  };
  isLoading: Boolean = true;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam() {
    this.teamService.getTeamById(this.teamId).subscribe(
      data => {
        this.team = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
