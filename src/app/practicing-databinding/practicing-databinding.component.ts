import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html'
})
export class PracticingDatabindingComponent {
  userName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetUserName() {
    this.userName = '';
  }
}
