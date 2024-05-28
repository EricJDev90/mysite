import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.scss'],
  imports: [CommonModule, IonTitle],
  standalone: true,
})
export class DataChartComponent {
  @Input() data: any;

  determineBarSize(StartDate: string) {
    return "true"
  }

  determineYears(StartDate: string) {
    return "workng";
  }
}
