import { Component } from '@angular/core';
import { Player } from './player.interface';
import { PlayersService } from './players.service';

@Component({
  selector: 'players',
  providers: [PlayersService],
  template: require('./players.html')
})

export class PlayersPage {
  private totalCount: number;
  private pageSize: number = 10;
  private currentPage: number;
  private maxSize: number = 10;
  private pagerDisabled: boolean = false;
  private pageOptions: any;
  private playerList: Array<Player> = [];
  private data: Array<any> = [];

  private activeLoader: boolean = false;

  constructor(private playersService : PlayersService) {
    this.currentPage = 1;
    this.pageOptions = {
      "color": "default",
      "hidenLabel": false,
      "boundaryLinks": false,
      "firstText": "First",
      "lastText": "Last",
      "directionLinks": true,
      "prevText": "Prev",
      "nextText": "Next"
    };
  }

  ngOnInit() {
    this.playersService.getAll()
      .subscribe(
      (response) => {
        // data = JSON.stringify(response.json());
        console.log("response.json: ", response.json());
        this.playerList = response.json();
        this.totalCount = this.playerList.length;
        this.data = this.getData(this.currentPage, this.pageSize);
      },
      (err) => {
          //Here you can catch the error
          console.log("test getItems returned err");
      });
  }

  getData(pageIndex: number, pageSize: number): Array<any> {
    var start = (pageIndex - 1) * pageSize;
    let data: Array<any> = [];
    for (let i = start; i < pageIndex * pageSize && i < this.totalCount; i++) {
      data.push(this.playerList[i]);
    }
    return data;
  }

  onSelectPage(pageIndex: number): void {
    this.activeLoader = true;
    this.pagerDisabled = true;
    var self = this;
    setTimeout(function () {
      self.data = self.getData(pageIndex, self.pageSize);
      self.activeLoader = false;
      self.pagerDisabled = false;
    }, Math.floor(Math.random() * 1500))
  }

  togglePagerDisable(): void {
    this.pagerDisabled = !this.pagerDisabled;
  }
}