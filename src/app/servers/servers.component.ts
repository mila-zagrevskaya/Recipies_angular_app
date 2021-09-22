import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html'
})

export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'no server was created!';
  serverName: string = 'Testserver';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpddateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}