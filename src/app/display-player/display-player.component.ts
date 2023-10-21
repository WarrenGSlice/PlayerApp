import { Component, Input, OnInit } from '@angular/core';
import { RunningBack } from '../models/runningbacks.model';
import { PlayerServiceService } from '../service/player-service.service';
import { DeletePlayerComponent } from '../delete-player/delete-player.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent {
  @Input() runningbacks: RunningBack | null = null;
  //runningbacks: RunningBack | undefined;
  deleteRunningBack: RunningBack | null = null;
  wasSubmitted = false;
  //selectedRunningBack: RunningBack | undefined;
  wasClicked = false;
  editRunningBack: RunningBack | null = null;

  constructor(private service: PlayerServiceService){}

  ngOnInit(){
    console.log("Getting Data...");
    console.log("Player", this.runningbacks);
    // this.runningback!.name.forEach(element => console.log(element.name));
  }

  public onDeleteRunningBack(runningback: RunningBack) {
    this.deleteRunningBack = runningback;
  }

  public onEditRunningBack(runningback: RunningBack){
    this.editRunningBack = runningback;
  }

  public onSubmit(){
    this.service.deleteRunningBack(this.runningbacks!.rbId, this.test);
    console.log('The return from deleteRunningBack was ' + status);
    this.wasSubmitted = true
  }

  //onSelectedRunningBacks(runningback: RunningBack) {
  //  console.log("Selected Running Back of " + runningback.name);
  //  this.selectedRunningBack = runningback;
  //}

  public onEditClick(){
    this.wasClicked = true;
  }

  test(){}
}

