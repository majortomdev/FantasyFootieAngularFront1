import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

//  getPlayers() {
//    return this.http.get('http://jsonplaceholder.typicode.com/users');
  //  }


 getPlayers() {
   return this.http.get('http://localhost:8080/players');
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  // handleError(error: HttpErrorResponse){
  //   console.log("lalalalalalalala");
  //   return throwError(error);
  //   }

}
