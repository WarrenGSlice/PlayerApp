import { Component, Input } from '@angular/core';
import { RunningBack } from '../models/runningbacks.model';
import { PlayerServiceService } from '../service/player-service.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent {

  @Input() runningback: RunningBack = {
    rbId: -1,
    rank: -1,
    name: "",
    team: "",
    byeWeek: -1,
    points: -1,
    rushAttempts: -1,
    rushYards: -1,
    rushTds: -1,
    recs: -1,
    recYards: -1,
    recTds: -1,
    fum: -1,
    fumLost: -1,
    firstDowns: -1,
    hundredGame: -1,
    twoHundredGame: -1,
    fourtyPlay: -1,
    fourtyTd: -1,
    passComp: -1,
    passYards: -1,
    passTds: -1,
    targetShare: -1,
    pointsGame: -1,
  };
  wasSubmitted: boolean = false;
  constructor(private service: PlayerServiceService){}

  @Input() runningbacks: RunningBack | undefined;

  ngOnInit(){}

  public onSubmit(){
    this.service.deleteRunningBack(this.runningback!.rbId, this.test);
    console.log('The return from deleteRunningBack was ' + status);
    this.wasSubmitted = true
  }

  test(){}

}
