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
  playerHere: object = {
    pName: '',
    age: ''
 }

  playerNo: number;

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
    this.playerNo = +parseInt(document.getElementById('findHim').value, 10);
    //console.log(this.playerNo);

    this.httpService.getPlayer(this.playerNo).subscribe(data => {
      this.playerHere = data;
      console.log(this.playerHere);
    });

    document.getElementById('reviewsection').style.visibility = 'visible';
}

  addReview(): void {
    this.review.review = document.getElementById('pReview').value;
    this.review.playerId = 12; this.review.userId = 1234;
    console.log(this.review.userId +' is here anseao');
    document.getElementById('pReview').innerHTML = '';
    this.httpService.postReview (this.review)
                .subscribe(data => {
                  alert("Review Added");
                });

    // .subscribe((data: any) => console.log(data),
    //  error => console.log(error));
    // this.review = new Review();


  //this.httpService.postReview<Review>( this.review, this.playerid, this.userid);
  //console.log(review);
  //this.playerid//must be used to send it to db
}


}
