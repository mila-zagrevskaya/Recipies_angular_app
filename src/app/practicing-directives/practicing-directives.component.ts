import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html'
})
export class PracticingDirectivesComponent implements OnInit {
  displayDetails: boolean = false;
  buttonClickCounter: number = 0;
  buttonClicks: any = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  showDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonClickCounter = this.buttonClickCounter + 1;
    this.buttonClicks.push(this.buttonClickCounter);
  }

  getColor(elementIndex: number) {
    return elementIndex >= 5 ? "blue" : "none";
  }
}
