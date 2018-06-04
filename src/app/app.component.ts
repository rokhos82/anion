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
    this._electronService.ipcRenderer.on('onDataReady',(event,data) => {
      console.log(data);
      this.cards = data;
    });
    this._electronService.ipcRenderer.send('onAppReady');
  }

  addCard(ttl,txt) {
    let card = {
      title: ttl,
      text: txt
    };
    this.cards.push(card);
    this._electronService.ipcRenderer.send('onNewCard',card);
  }
}
