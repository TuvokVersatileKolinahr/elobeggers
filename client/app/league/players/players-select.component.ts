import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-players-select',
  templateUrl: './players-select.component.html',
  styleUrls: ['./players-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlayersSelectComponent),
      multi: true
    }
  ]
})
export class PlayersSelectComponent implements ControlValueAccessor {
  @Input() selectedPlayer: string;
  @Input() players: Array<Player>;

  playerSelectGroup = new FormGroup({
    playerList: new FormControl()
  });

  constructor(private playerService: PlayerService) { }

  writeValue(value: any) {
    if (value !== undefined) {
      this.selectedPlayer = value;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  onChange(player) {
    if (player) {
      this.propagateChange(this.selectedPlayer);
    }
  }

}
