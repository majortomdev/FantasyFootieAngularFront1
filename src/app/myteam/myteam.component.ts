import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyTeamComponent implements OnInit {

  theLads: Object;
  picture: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getPlayers().subscribe(data => {
    //   this.theLads = data;
    //   //console.log(this.theLads);
    // })
}
}
