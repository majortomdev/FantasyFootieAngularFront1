import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

//  getPlayers() {
//    return this.http.get('http://jsonplaceholder.typicode.com/users');
//    }


 getPlayers() {
   return this.http.get(this.url + '/players');
  }

 getPlayer(id: number) {
  return this.http.get(this.url + '/players/' + id);
 }

  // postPlayer(player: Player) {
  //   this.http.post(url + "addplayer", player)
  //  }

}
