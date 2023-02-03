import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  @Input() in:any[]=[];
  c:number=0;
  @Output() send = new EventEmitter<number>();
  inc() {
    this.c++;
    this.send.emit(this.c);
  }
  dec(){
    this.c--;
    this.send.emit(this.c);
  }
  res(){
    this.c=0;
    this.send.emit(this.c);
  }

}