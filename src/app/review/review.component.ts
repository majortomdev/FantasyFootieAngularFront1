import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  playr: Object;

  @Input() indx: string;
  //let num: number = parseInt(s:String, document.getElementById("indx"));

  constructor(private httpService: HttpService) { }

  //let index : number = parseInt(this.indx);

  ngOnInit() {
    // this.httpService.findThePlayer(this.index).subscribe(data => {
    //   this.playr = data;
    //   console.log(this.playr);
    })
  }
  //let num: number = 0;

  // OnInput(event: any) {
  //   this.num = event.target.value;
  //   }

//delete below if method works from oninit
  // findThePlayer(indx) {

  //   this.httpService.findPlayer(indx);
  //   console.log(this.indx);
  // }

// }
