import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerselectfilter',
  pure: false
})
export class PlayerSelectFilterPipe implements PipeTransform {
  transform(players: any[], filter: any[]): any {
    if (!players || !filter) {
      return players;
    }
    // filter players array, players which match and return true will be kept, false will be filtered out
    return players.filter(player => filter.indexOf(player._id) === -1);
  }
}
