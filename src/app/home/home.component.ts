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
  newUser: User = new User();
  // newUser: any = {
  //   userId: '',
  //   username: '',
  //   userpassword: ''
  // }
  //user: object;
  user: any ;
  //newUser: User;
  theusername: string;
  thepassword: string;
  anewname: string;
  anewpassword: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

}


  checkLogin() {
       this.httpService.checkValidUser(this.theusername, this.thepassword)
       .subscribe( data => {
         console.log('data :' + data);
            this.user = data;

              alert("Welcome home "+this.user.userName);
       }
       );
  }

  newSignUp(): void {
    console.log('hi from home.ts.......on newsignup')

    this.newUser.userName = this.anewname;
    this.newUser.userPassword = this.anewpassword;
    this.httpService.newSignUp(this.newUser)
        .subscribe(data => {
            this.newUser = data;
            console.log("made it to newsignup....."+this.newUser);
            alert('New user ' + this.newUser.userName + ' has been entered');
        });
  }
}

