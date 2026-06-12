import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  content = inject(ContentService);
}
