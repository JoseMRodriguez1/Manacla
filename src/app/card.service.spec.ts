import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { CardService } from './card.service';

describe('CardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: AngularFirestore, useValue: {
      }
    }]
  }));

  it('should be created', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });
});
