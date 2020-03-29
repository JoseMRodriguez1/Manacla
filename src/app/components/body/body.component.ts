import { Component, Input, OnInit } from '@angular/core';
import { CARDS_INFO } from 'src/app/constants/cardsInfo';
import { Card } from 'src/app/domain/card.model';
import { DataService } from 'src/app/services/dataService/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cards = this.dataService.get2DArray(this.cardsInfo, 3);
  }

}
