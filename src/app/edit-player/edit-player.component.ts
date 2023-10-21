import { Component, Input, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { RunningBack } from '../models/runningbacks.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {
  
  wasSubmitted: boolean = false;

  constructor(private service: PlayerServiceService) { }
  
  //runningbacks: RunningBack[] | null = null;
  //selectedRunningBack: RunningBack | undefined;
  @Input() runningback: RunningBack | null = null;
  //@Input() rbs: RunningBack | undefined;
  //selectRunningBack?: RunningBack;
  //updateRunningBack: RunningBack | null = null;
  


  //runningbackForm = new FormGroup({
  //  name: new FormControl(this.runningbacks),
  //});

  ngOnInit() {
  }
  
  public onSubmit() {
    this.service.updateRunningBack(this.runningback!, this.test);
    console.log('The return from updateRunningBack() was ' + status);
    this.wasSubmitted = true;
  }
  
  test() {
  
  }

  //onSelectedRunningBacks(runningback: RunningBack) {
  //  console.log("Selected Running Back of " + runningback.name);
  //  this.selectedRunningBack = runningback;
 // }

  //onSelectRunningBack(runningback:RunningBack){
  //  console.log("Select Running Back of " + runningback.name);

  //  this.selectedRunningBack = runningback;
  //}
  //onSelect(runningback:RunningBack):void{
  //  this.selectRunningBack = runningback;
 // }

  //public onUpdateRunningBack(runningback: RunningBack) {
  //  this.updateRunningBack = runningback;
  //}
}
