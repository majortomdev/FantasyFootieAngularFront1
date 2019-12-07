import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

 getPlayers() {
   return this.http.get(this.url + '/players');
  }

 getPlayer(id: number) {
  return this.http.get(this.url + '/players/' + id);
 }

  postReview(reviewObject: Review  ) {
    return this.http.post<Review >(this.url + '/reviews/' + this.playerid, reviewObject);
   }

}
