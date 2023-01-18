import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Output() secondOutput = new EventEmitter();

  passEvent(){
    // console.log("test in second comopnent")
    this.secondOutput.emit();
  }
}
