import { Component } from '@angular/core';
import { RunningBack } from '../models/runningbacks.model';
import { PlayerServiceService } from '../service/player-service.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent  {

  runningback: RunningBack = {
    rbId: Math.floor(Math.random() * 1000000),
    rank: 0,
    name: "",
    team: "",
    byeWeek: 0,
    points: 0,
    rushAttempts: 0,
    rushYards: 0,
    rushTds: 0,
    recs: 0,
    recYards: 0,
    recTds: 0,
    fum: 0,
    fumLost: 0,
    firstDowns: 0,
    hundredGame: 0,
    twoHundredGame: 0,
    fourtyPlay: 0,
    fourtyTd: 0,
    passComp: 0,
    passYards: 0,
    passTds: 0,
    targetShare: 0,
    pointsGame: 0,
  };

  wasSubmitted: boolean = false;

  constructor(private service: PlayerServiceService){}

  ngOnInit(){}

  public onSubmit() {
    // Parse the players then call the service to create the new player
    this.service.createRunningBack(this.runningback, this.test);
    console.log("The return from createRunningBack() was " + status);
    this.wasSubmitted = true;
  }

  test(){}
  
}
