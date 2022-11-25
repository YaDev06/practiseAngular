import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card/card';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  cards!: Card[];
  hoveredCard: string = '';
  clickedCard: string = '';

  constructor(private CardService: CardService) {
    this.CardService.card$.subscribe((cards) => {
      this.cards = cards;
    });
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }
}
