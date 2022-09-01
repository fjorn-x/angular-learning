import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No server was created';
  serverName = ``;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    console.log(document.getElementsByClassName('btn'));
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {}
}
