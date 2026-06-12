import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {}
