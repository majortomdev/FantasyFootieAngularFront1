import { Component, OnInit } from '@angular/core';
//import { PlayerListComponent } from '../playerList/playerList.component';
import { HttpService } from '../http.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // user: object = {
  //   userId: '',
  //   username: '',
  //   userpassword: ''
  // }
  user: object;
  theusername: string;
  thepassword: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

}


  checkLogin() {
       this.httpService.checkValidUser(this.theusername, this.thepassword)
       .subscribe( data => {
         console.log('data :'+ data);
            this.user = data;
              alert("Welcome home "+this.user.theusername);
       }
       );



  }
}

