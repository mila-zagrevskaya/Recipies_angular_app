import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html'
})

export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = '';
  serverName: string = 'TestServer';
  isServerCreated = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    // this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }
}