import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment13-b';
  count=0;
  mycolor=0
  ctrl = ["Increment", "Reset", "Decrement",0];

  receivecount(event:number){
    this.count=event;
  }
  
}
