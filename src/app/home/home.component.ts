import { Component, OnInit } from '@angular/core';
import { PlayerListComponent } from '../playerList/playerList.component';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theLads: Object;
  picture: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe(data => {
      this.theLads = data;
      console.log(this.theLads);
    })
}



}
