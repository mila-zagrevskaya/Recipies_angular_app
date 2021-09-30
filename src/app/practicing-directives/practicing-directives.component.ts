import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html'
})
export class PracticingDirectivesComponent implements OnInit {
  displayDetails: boolean = false;
  logClicks: any = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  showDetails() {
    this.displayDetails = !this.displayDetails;
    // this.logClicks.push(this.logClicks.length+1);
    this.logClicks.push(new Date());
  }
}
