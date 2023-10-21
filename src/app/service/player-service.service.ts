import { Injectable } from '@angular/core';
import { RunningBack } from '../models/runningbacks.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  private host = "http://localhost:5000";
  url=String;
  constructor(private http: HttpClient) { }

  /**
   * GetRunningBacks retrieves the runningbacks from the data set 
   * and returns them to the view in a list format
   * TypeScript syntax to define a callback function with
   * an array of Running Backs as a parameter. The callback returns void.
   * getRunningBacks also returns void, however these are defined independently
   * */ 
  public getRunningBacks(callback: (runningbacks: RunningBack[]) => void): void {
    this.http.get<RunningBack[]>(this.host + "/runningbacks")
    .subscribe((runningbacks: RunningBack[]) => {
      callback(runningbacks);
    });
  }
  /**
   * Create RunningBack creates a new Running Back and pushes it into the data set
   */
  public createRunningBack(runningback: RunningBack, callback: () => void): void {
    // Add a new RunningBack to the list of Running Backs
    this.http.post<RunningBack>(this.host + "/runningbacks", runningback)
    .subscribe((data) => {
      callback();
    });
  }
  /**
   * UpdateRunningBack will update and change details about a specific runningback
   * in the data set
   */
  public updateRunningBack(runningback: RunningBack, callback: () => void): void {
    // Search for the RunningBack in the list of RunningBacks and replace it in the list
    this.http.put<RunningBack>(this.host + "/runningbacks", runningback)
    .subscribe((data) => {
      callback();
    });
  }
  /**
   * DeleteRunningBack will search for a Running Back from its rbId and remove it
   * from the data set
   */
  public deleteRunningBack(rbId: number, callback: () => void): void {
    // Search for the RunningBack in the list of RunningBacks and delete it from the list
    this.http.delete(this.host + "/runningbacks/" + rbId)
    .subscribe((data) => {
      callback();
    });
  }

}
