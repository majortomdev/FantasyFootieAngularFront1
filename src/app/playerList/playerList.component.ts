import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './playerList.component.html',
  styleUrls: ['./playerList.component.scss']
})
export class PlayerListComponent implements OnInit {

  Ballers: Object;
  selectedPlayers: any[] = [];
  teamCost: number =0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getPlayers().subscribe(data => {
        this.Ballers = data;
        console.log(this.Ballers);
      })
  }

  buyThisPlayer(player){
    this.selectedPlayers.push(player);
    this.teamCost+= player.mvalue;

  }



}
