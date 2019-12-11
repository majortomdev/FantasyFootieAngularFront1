import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './playerList/playerList.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MyteamComponent } from './myteam/myteam.component';

//component with ' '(empty) path is the one that loads first
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path:'myteam', component: MyteamComponent },
    { path: 'players', component: PlayerListComponent},
    { path: 'reviews', component: ReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
