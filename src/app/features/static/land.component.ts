import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { UiCardComponent } from '../../shared/components/ui-card/ui-card.component';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [NgOptimizedImage, UiCardComponent],
  templateUrl: './land.component.html'
})
export class LandComponent {
  content = inject(ContentService);
}
