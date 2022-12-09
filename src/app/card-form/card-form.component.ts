import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from './../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  constructor(private CardService: CardService) {}

  MyForm!: FormGroup;

  ngOnInit(): void {
    this.MyForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(''),
      ]),
    });
  }
  addCard() {
    console.log(this.MyForm);
  }

  get title() {
    return this.MyForm.controls['title'];
  }
  get desc() {
    return this.MyForm.controls['desc'];
  }
}
