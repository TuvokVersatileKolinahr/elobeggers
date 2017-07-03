import { Component, Input } from '@angular/core';

import { Player } from '../../models/player';

@Component({
  selector: 'app-player-show',
  templateUrl: './player-show.component.html',
  styleUrls: ['./player-show.component.scss']
})
export class PlayerShowComponent {
  @Input() player: Player;

  constructor() { }
}
