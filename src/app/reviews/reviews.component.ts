import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Review } from '../review';
import { PlayerListComponent } from '../playerList/playerList.component';
import { Player } from '../player';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  review: Review = new Review();
  //review: Review;
  playerreview: string;
  playersListed: any;
  //playerHere: Player = new Player();
//   playerHere: object = {
//     pName: '',
//     age: '',
//     playerId: ''
//  }
  playerHere: object;
  playerNo: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe(data => {
      this.playersListed = data;
      console.log(this.playersListed);
    })

  }

  findPlayer() {
    this.httpService.getPlayer(this.playerNo).subscribe(data => {
      this.playerHere = data;
      // console.log("name: "+this.playerHere.pName+"id: "+this.playerHere.id+" Pos: "+this.
      // playerHere.fPosition+" Age: "+this.playerHere.age+" Value: "+this.playerHere.mValue+"M");
    });
    document.getElementById('reviewsection').style.visibility = 'visible';
}

  addReview(): void {
    this.review.review = this.playerreview;
    this.review.playerId = this.playerNo;
    console.log(this.review.userId + ' is here anseao');
    document.getElementById('pReview').innerHTML = '';
    this.httpService.postReview (this.review)
                .subscribe(data => {
                  alert("Review Added for "+this.playerHere);
                });
}


}
