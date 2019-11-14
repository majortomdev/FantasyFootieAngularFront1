import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './playerList/playerList.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LeagueComponent } from './league/league.component';
import { InterceptorService } from './interceptor.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerListComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
