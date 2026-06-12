import { Component, inject, OnInit, signal } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  template: `
    <div *ngIf="weatherData()" class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white flex items-center gap-4 shadow-lg">
      <div class="text-3xl">
        {{ getWeatherIcon(weatherData().current.weather_code) }}
      </div>
      <div>
        <div class="text-xs uppercase tracking-wider opacity-80">Manacla, Sajoma</div>
        <div class="flex items-baseline gap-1">
          <span class="text-2xl font-bold">{{ weatherData().current.temperature_2m | number:'1.0-0' }}°C</span>
          <span class="text-sm opacity-90">{{ weatherData().current.relative_humidity_2m }}% hum.</span>
        </div>
      </div>
    </div>
  `
})
export class WeatherWidgetComponent implements OnInit {
  private contentService = inject(ContentService);
  weatherData = signal<any>(null);

  ngOnInit() {
    this.contentService.getWeather().subscribe(data => {
      this.weatherData.set(data);
    });
  }

  getWeatherIcon(code: number): string {
    if (code === 0) return '☀️';
    if (code <= 3) return '🌤️';
    if (code <= 48) return '🌫️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 82) return '🌦️';
    return '⛈️';
  }
}
