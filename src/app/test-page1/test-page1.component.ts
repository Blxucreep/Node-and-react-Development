import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {
  numberValue = 1;

  onClickIncrementValue() {
    this.numberValue++;
   }   
}