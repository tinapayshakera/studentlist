import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  @Input() firstInput: number = 0;

  getFirstInput() {
    console.log(this.firstInput);
  }
}
