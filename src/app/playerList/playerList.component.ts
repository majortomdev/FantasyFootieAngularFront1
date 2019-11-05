import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './playerList.component.html',
  styleUrls: ['./playerList.component.scss']
})
export class PlayerListComponent implements OnInit {

  Ballers: Object;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getPlayers().subscribe(data => {
        this.Ballers = data;
        console.log(this.Ballers);
      })
  }


}
