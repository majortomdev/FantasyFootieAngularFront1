import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './playerList/playerList.component';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';

//component with ' '(empty) path is the one that loads first
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'players', component: PlayerListComponent},
    { path: 'league', component: LeagueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
