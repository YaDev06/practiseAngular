import { Directive, HostListener, Input } from '@angular/core';
import { CardService } from '../card.service';

@Directive({
  selector: '[clickedCard]',
})
export class clickedCardDirective {
  @Input('clickedCard') clickedCard!: string;

  @HostListener('click') onClick() {
    this.cardService.cardClicked$.next(this.clickedCard);
  }

  constructor(private cardService: CardService) {}
}
