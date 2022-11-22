import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card/card';
import { distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: Card[];
  hoveredCard: string = '';
  clickedCard: string = '';

  constructor(private CardService: CardService) {
    this.cards = this.CardService.cards;
    
    this.CardService.cardClicked$
      .pipe(
        map((value) => {
          return 'Clicked Title ' + value;
        }),
        tap((value) => {
          console.log(value);
        })
      )
      .subscribe((value) => {
        this.clickedCard = value;
      });

    this.CardService.cardHovered$
      .pipe(
        distinctUntilChanged(),
        map((value: string) => {
          return 'Hovered Title ' + value;
        }),
        tap((value) => {
          console.log(value);
        })
      )
      .subscribe((value) => {
        this.hoveredCard = value;
      });
  }
}
