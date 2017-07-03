import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { GameService } from '../services/game.service';
import { TeamService } from '../services/team.service';
import { PlayerService } from '../services/player.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { PlayersSelectComponent } from '../players/players-select.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  game = {};
  games = [];
  teams = [];
  players = [];
  isLoading = true;
  isEditing = false;

  addGameForm: FormGroup;
  rd = new FormControl('', Validators.required);
  ra = new FormControl('', Validators.required);
  bd = new FormControl('', Validators.required);
  ba = new FormControl('', Validators.required);

  constructor(private gameService: GameService,
    private teamService: TeamService,
    private playerService: PlayerService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getGames();
    this.getTeams();
    this.getPlayers();
    this.addGameForm = this.formBuilder.group({
      rd: this.rd,
      ra: this.ra,
      bd: this.bd,
      ba: this.ba
    });
  }

  getGames() {
    this.gameService.getNewest(10).subscribe(
      data => this.games = data,
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

  getPlayers() {
    this.playerService.getPlayers().subscribe(
      data => this.players = data,
      error => console.log(error)
    );
  }

  addGame() {
    // todo: prepare game
    // find team red (this.addGameForm.value.rd, this.addGameForm.value.ra) or create
    // find team blue (this.addGameForm.value.bd, this.addGameForm.value.ba) or create
    console.log(this.addGameForm.value);
    this.gameService.addGame(this.addGameForm.value).subscribe(
      res => {
        const newGame = res.json();
        this.games.push(newGame);
        this.addGameForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(game) {
    this.isEditing = true;
    this.game = game;
  }

  cancelEditing() {
    this.isEditing = false;
    this.game = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the games to reset the editing
    this.getGames();
  }

  editGame(game) {
    this.gameService.editGame(game).subscribe(
      res => {
        this.isEditing = false;
        this.game = game;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteGame(game) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.gameService.deleteGame(game).subscribe(
        res => {
          const pos = this.games.map(elem => elem._id).indexOf(game._id);
          this.games.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
