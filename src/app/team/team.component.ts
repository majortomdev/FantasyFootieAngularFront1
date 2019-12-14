import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  theLads: Object;
  picture: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe(data => {
      this.theLads = data;
      console.log("from team compoenent:  "+this.theLads);
    })
}
}
