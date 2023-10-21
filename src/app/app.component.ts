import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Player Projector App';
  version = '1.0';
  constructor(private router: Router){
    
  }

  public displayVersion(){
    alert(this.title + " Version: " + this.version);
  }
  public displayPlayerList(){
    this.router.navigate(['list-players']);
  }
}
