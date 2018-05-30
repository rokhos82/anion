import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anion';

  cards = [
    {
      title: "One of Four",
      text: "This is the first of four cards",
      order: 1
    },
    {
      title: "Two of Four",
      text: "Something whity here!",
      order: 3
    },
    {
      title: "Three of Four",
      text: "Henry the 8th...wait",
      order: 2
    },
    {
      title: "Four of Four",
      text: "Is this a movie title",
      order: 4
    },
    {
      title: "Five of Four",
      text: "What are we, pirates?",
      order: 5
    },
    {
      title: "Units",
      text: "Unit design card",
      order: 6
    },
    {
      title: "Fleets",
      text: "Fleet setup card",
      order: 7
    },
    {
      title: "Mobius",
      text: "The battle engine goes here!",
      order: 8
    }
  ];
}
