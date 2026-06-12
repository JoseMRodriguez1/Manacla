import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProductCard } from '../../../core/models/content.models';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './ui-card.component.html'
})
export class UiCardComponent {
  item = input.required<ProductCard>();
}
