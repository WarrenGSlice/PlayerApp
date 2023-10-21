import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { BackButtonDirective } from './back-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    CreatePlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent,
    DeletePlayerComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
