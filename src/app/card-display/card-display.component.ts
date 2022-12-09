import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Card } from '../card/card';
import { CardService } from './../card.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent implements OnInit {
  idCard!: number;
  currentCard!: Card;
  cards!: Card[];

  constructor(
    private route: ActivatedRoute,
    private CardService: CardService
  ) {}

  ngOnInit(): void {
    this.CardService.card$
      .pipe(
        switchMap((cards: Card[]) => {
          return this.route.params.pipe(
            switchMap((param) => {
              this.idCard = +param['id'];
              return this.route.queryParams.pipe(
                map((queryParams) => {
                  return { ...cards[this.idCard], ...queryParams };
                })
              );
            })
          );
        })
      )
      .subscribe((currentCard) => {
        this.currentCard = currentCard;
        console.log(currentCard);
      });
  }
}
