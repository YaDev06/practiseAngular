import { Component, OnInit, ElementRef } from '@angular/core';
import { CardService } from './../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  constructor(private CardService: CardService) {}

  ngOnInit(): void {}
  addCard(title: string, description: string, link: string) {
    if (
      title &&
      description &&
      link &&
      title.trim() &&
      description.trim() &&
      link.trim()
    ) {
      this.CardService.addCard({ title, description, link });
    }
    else{
      alert("Error")
    }
  }
}
