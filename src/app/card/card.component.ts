import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CardService } from './../card.service';
import { Card } from './card';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {
  constructor(private CardService: CardService) {}

  @Input('card') card!: Card;
  @Input('index') index!: number;
  sub$ = new Subject();

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log(this.card.title + 'is destroyed');
    this.sub$.next(null);
    this.sub$.complete();
  }

  deleteCard(idx: number) {
    this.CardService.deleteCard(idx);
  }
}
