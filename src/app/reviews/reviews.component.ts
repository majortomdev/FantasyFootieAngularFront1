import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Review } from '../review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  review: Review = new Review();
  playerreview: string;
  playersListed: any;
  playerHere: object = {
    pName: '',
    age: ''
 }
  //playerHere: object;
  playerNo: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe(data => {
      this.playersListed = data;
      console.log(this.playersListed);
    })

  }

  findPlayer() {
    //this.playerNo = +parseInt( document.getElementById('findHim').value, 10);

    console.log("from rviews.ts: "+this.playerNo);

    this.httpService.getPlayer(this.playerNo).subscribe(data => {
      console.log('data :'+data);
      this.playerHere = data;
      console.log('this is from the component subscription to findplayer  :'+this.playerHere);
      console.log(this.playerHere);
    });

    document.getElementById('reviewsection').style.visibility = 'visible';
}

  addReview(): void {
    //this.review.review = <HTMLInputElement> document.getElementById('pReview').value;
    //this.review.playerId = 12; this.review.userId = 1234;
    this.review.review = this.playerreview;
    console.log(this.review.userId + ' is here anseao');
    document.getElementById('pReview').innerHTML = '';
    this.httpService.postReview (this.review)
                .subscribe(data => {
                  alert("Review Added for "+this.playerHere.pName);
                });
}


}
