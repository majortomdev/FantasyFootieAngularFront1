import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // const headers = new HttpHeaders();
  // headers.

  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

 public getPlayers() {
   return this.http.get(this.url + '/players');
  }

 public getPlayer(id: number) {
  return this.http.get(this.url + '/players/' + id);
 }


  public postReview(review: Review  ) {
    console.log('This playerid from service class: ' + review.playerId);
    return this.http.post<Review>(this.url + '/reviews', review);
   }


  public checkValidUser(username: string, password: string) {
    return this.http.get(this.url + '/users/' + username + '/' + password);
    //return;
  }







  // postReview(review: Review): Observable<Review> {
  //   return this.http.post(`${this.url}` + '/reviews', review);
  // }

  //import {Headers} from 'angular2/http';



  // addUser(user : User){
  //     return this.http.post(this._baseUrl + '/API/identity/user',user,{ headers: headers}).map((response: Response) =>{
  //     console.log (response.json());
  //     })
 // }




}
