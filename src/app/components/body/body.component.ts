import { Component, Input, OnInit } from '@angular/core';
import { CARDS_INFO } from 'src/app/constants/cardsInfo';
import { Card } from 'src/app/domain/card.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() companyName: string;
  @Input() title: string;

  cardsInfo: (Card)[] = CARDS_INFO;
  cards: (any)[];

  constructor() { }

  ngOnInit() {
    this.cards = this.get2DArray(this.cardsInfo, 3);
  }

  get2DArray = (list: (Card)[], split: number) => {
    const result = []
    const input = list.slice(0)
    while (input[0]) {
      result.push(input.splice(0, split))
    }
    return result
  }

}
