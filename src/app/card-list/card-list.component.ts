import { Component, OnInit } from '@angular/core';

import { CardService } from 'src/app/card.service';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(data => {
      this.cards = data.map(e => {
        const payload = e.payload;
        return {
          id: payload.doc.id,
          ...payload.doc.data()
        } as Card;
      });
    });
  }

  create(card: Card) {
    this.cardService.createCard(card);
  }

  update(card: Card) {
    this.cardService.updateCard(card);
  }

  delete(id: string) {
    this.cardService.deleteCard(id);
  }
}
