import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { ExperiencePageData } from 'src/app/types/globalTypes';
import { DataChartComponent } from 'src/app/components/data-chart/data-chart.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DataChartComponent]
})
export class ExperiencePage implements OnInit {
  private stateService = inject(GlobalStateServiceService)
  pageData: ExperiencePageData | undefined = undefined;

  ngOnInit() {
    this.stateService.data.subscribe(update => this.pageData = update?.ExperiencePage)
  }
}
