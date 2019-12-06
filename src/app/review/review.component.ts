import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

   player: object = {
    pName: '',
    age: ''
 }
  playerid: number;

  constructor(private httpService: HttpService) { }

  // ngOnInit() {
  //   this.httpService.getPlayer(this.playerid).subscribe(data => {
  //     this.player = data;
  //     console.log(this.player);
  //   })
  // }

  ngOnInit() {


  }

  findPlayer() {
    this.playerid = +parseInt(document.getElementById('findHim').value, 10);
    console.log(this.playerid);

    this.httpService.getPlayer(this.playerid).subscribe(data => {
      this.player = data;
      console.log(this.player);
    });

    document.getElementById('reviewsection').style.visibility = 'visible';
}


}
