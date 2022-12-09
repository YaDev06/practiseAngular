import { Component } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {

  cards!: Card[];
  hoveredCard: string = '';
  clickedCard: string = '';

  constructor(private CardService: CardService) {
    this.CardService.card$.subscribe((cards) => {
      this.cards = cards;
    });
  }


}
