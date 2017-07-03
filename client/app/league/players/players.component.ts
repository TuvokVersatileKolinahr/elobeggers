import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { PlayerService } from '../../services/player.service';
import { TeamService } from '../../services/team.service';
import { ToastComponent } from '../../../shared/toast/toast.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  player = {};
  players = [];
  allplayers = [];
  teams = [];
  isLoading = true;
  isEditing = false;
  onlyActive = true;

  addPlayerForm: FormGroup;
  name = new FormControl('', Validators.required);
  elo = new FormControl('');

  constructor(private playerService: PlayerService,
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
    this.addPlayerForm = this.formBuilder.group({
      name: this.name,
      elo: this.elo
    });
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(
      data => {
        this.allplayers = data;
        if (this.onlyActive) {
          this.players = data.filter(player => {
            return !player.retired;
          });
        } else {
          this.players = data
        }
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      data => this.teams = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  toggleOnlyActive() {
    this.onlyActive = !this.onlyActive;
    if (this.onlyActive) {
      this.players = this.allplayers.filter(player => {
        return !player.retired;
      });
    } else {
      this.players = this.allplayers
    }
  }

  addPlayer() {
    this.playerService.addPlayer(this.addPlayerForm.value).subscribe(
      res => {
        const newPlayer = res.json();
        this.players.push(newPlayer);
        this.addPlayerForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(player) {
    this.isEditing = true;
    this.player = player;
  }

  cancelEditing() {
    this.isEditing = false;
    this.player = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the players to reset the editing
    this.getPlayers();
  }

  editPlayer(player) {
    this.playerService.editPlayer(player).subscribe(
      res => {
        this.isEditing = false;
        this.player = player;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deletePlayer(player) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.playerService.deletePlayer(player).subscribe(
        res => {
          const pos = this.players.map(elem => elem._id).indexOf(player._id);
          this.players.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
