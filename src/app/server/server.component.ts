import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      h4 {
        border: 1px solid black;
        padding: 10px;
      }
    `,
  ],
})
export class ServerComponent {
  severId: number = 10;
  serverStatus: string = 'offline';
}
