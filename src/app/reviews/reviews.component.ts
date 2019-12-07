import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Review } from '../review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewsComponent implements OnInit {
  review: Review = new Review();
//   review: string;
//    player: object = {
//     pName: '',
//     age: ''
//  }
  playerid: number;
  userid: number;

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

  addReview() {
    this.review.review = document.getElementById('pReview').value;
    this.review.playerNo = 12; this.review.userId = 1234;
    console.log(this.review);



    //this.httpService.postReview<Review>( this.review, this.playerid, this.userid);
    //console.log(review);
    //this.playerid//must be used to send it to db
  }


}
