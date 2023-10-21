import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';

const routes: Routes = [
  { path: 'create', component: CreatePlayerComponent },
  { path: 'list-players', component: ListPlayersComponent },
  { path: 'display/:id', component: DisplayPlayerComponent },
  { path: 'edit/', component: EditPlayerComponent },
  { path: 'delete', component: DeletePlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
