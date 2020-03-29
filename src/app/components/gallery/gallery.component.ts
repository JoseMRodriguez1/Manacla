import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/domain/card.model';
import { CARDS_INFO } from 'src/app/constants/cardsInfo';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cardsInfo: (Card)[] = CARDS_INFO;
  cards: (any)[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cards = this.dataService.get2DArray(this.cardsInfo, 3);
  }
}
