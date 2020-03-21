import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Card } from 'src/app/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: AngularFirestore) { }

  getCards = (): Observable<DocumentChangeAction<unknown>[]> => {
    return this.firestore.collection('cards').snapshotChanges();
  }

  createCard = (card: Card): Promise<firebase.firestore.DocumentReference> => {
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
