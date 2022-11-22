import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { CardService } from '../card.service';

@Directive({
  selector: '[bgOnHover]',
})
export class BgDirective {
  @Input('bgOnHover') hoveredCard!: string;

  @HostListener('mouseover') onHover() {
    this.cardService.cardHovered$.next(this.hoveredCard);
    this.elemenRef.nativeElement.style.cursor = 'pointer';
    this.renderer.setStyle(
      this.elemenRef.nativeElement,
      'boxShadow',
      '0 7px 15px #0a10143d, 0 2px 7px #0a10141f'
    );
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(
      this.elemenRef.nativeElement,
      'boxShadow',
      '0 10px 8px rgb(0 0 0 / 0.04), 0 4px 3px rgb(0 0 0 / 0.1)'
    );
  }

  constructor(
    private elemenRef: ElementRef,
    private renderer: Renderer2,
    private cardService: CardService
  ) {}
}
