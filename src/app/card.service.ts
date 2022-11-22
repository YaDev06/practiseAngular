import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from './card/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: Card[] = [
    {
      title: 'What is Angular ?',
      description: 'Get a high-level overview of the Angular platform',
      link: 'Platform overview',
    },
    {
      title: 'Getting started',
      description:
        'Examine and work with a small ready-made Angular app, without any setup',
      link: 'Try it now',
    },
    {
      title: 'Learn and Explore',
      description:
        'Learn about the fundamental design concepts and architecture of Angular apps',
      link: 'Introduce to Angular concepts',
    },
    {
      title: 'Setup environment',
      description:
        'Set up your local environment for development with the Angular CLI',
      link: 'Local setup',
    },
  ];

  constructor() {}

  addCard(card: Card) {
    this.cards.push(card);
  }

  cardHovered$ = new Subject<string>();
  cardClicked$ = new Subject<string>();
}
