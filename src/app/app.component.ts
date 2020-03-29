import { Component } from '@angular/core';
import { DataService } from './services/dataService/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  companyName = 'Manacla';
  title = 'Manacla';

  constructor(private dataService: DataService) {
    dataService.createObject();
  }
}
