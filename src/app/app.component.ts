import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anion';
  cards = [];
  cardTitle: string;
  cardText: string;

  constructor(private _electronService: ElectronService) {
  }

  ngOnInit() {
    this._electronService.ipcRenderer.send('onAppReady');
  }

  addCard(ttl,txt) {
    this.cards.push({title:ttl,text:txt});
  }
}
