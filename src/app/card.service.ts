import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from 'src/app/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: AngularFirestore) { }

  getCards() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  createCard(card: Card) {
    return this.firestore.collection('cards').add(card);
  }

  updateCard(card: Card) {
    delete card.id;
    this.firestore.doc('cards/' + card.id).update(card);
  }

  deleteCard(cardId: string) {
    this.firestore.doc('cards/' + cardId).delete();
  }
}
