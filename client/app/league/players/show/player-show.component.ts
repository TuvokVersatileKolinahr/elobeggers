import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-show',
  templateUrl: './player-show.component.html',
  styleUrls: ['./player-show.component.scss']
})
export class PlayerShowComponent implements OnInit, OnChanges {
  @Input() playerId: String;
  @Input() player: Player = {
    name: '',
    elo: 1500
  };
  isLoading: Boolean;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.playerId) {
      this.getPlayer(this.playerId);
    }
  }

  getPlayer(id: String) {
    this.playerService.getPlayerById(id).subscribe(
      data => {
        this.player = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
