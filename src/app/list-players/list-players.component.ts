import { Component, Input, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { RunningBack } from '../models/runningbacks.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent {
  @Input() runningbacks: RunningBack | null = null;
  runningback: RunningBack[] = [];
  //runningbacks: RunningBack[] = [];
  //selectedRunningBack: RunningBack | null = null;
  selectedRunningBack: RunningBack | undefined;
  deleteRunningBack: RunningBack | undefined;
  wasSubmitted = false;


  constructor(private service: PlayerServiceService){}

  ngOnInit() {
    console.log("Getting Data...");
    this.service.getRunningBacks((runningback: RunningBack[]) => {
      this.runningback = runningback;
      console.log('this.runningback', this.runningback);
      // new
      // for (let i = 0; i < runningbacks.length; i++) {
      // this.runningbacks[i].runningback = String(Object.values(runningbacks[i])); 
      //}
    });
  }

  //onSelectedRunningBacks(runningback: RunningBack) {
  //  console.log("Selected Running Back of " + runningback.name);
  //  this.selectedRunningBack = runningback;
 // }

  onSelectRunningBack(runningback:RunningBack){
    console.log("Select Running Back of " + runningback.name);

    this.selectedRunningBack = runningback;
  }

  public onDeleteRunningBack(runningback: RunningBack) {
    this.deleteRunningBack = runningback;
  }

  public onSubmit(){
    this.service.deleteRunningBack(this.runningbacks!.rbId, this.test);
    console.log('The return from deleteRunningBack was ' + status);
    this.wasSubmitted = true
  }

  test(){}
}
