import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { UiCardComponent } from '../../shared/components/ui-card/ui-card.component';
import { WeatherWidgetComponent } from '../../shared/components/weather-widget/weather-widget.component';
import { MapSectionComponent } from '../../shared/components/map-section/map-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, UiCardComponent, WeatherWidgetComponent, MapSectionComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  content = inject(ContentService);
}
