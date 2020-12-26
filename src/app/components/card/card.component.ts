import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Card } from 'src/app/domain/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const youTube = 'https://www.youtube.com/embed/' + this.card?.youTubeVideo;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(youTube);
  }
}
