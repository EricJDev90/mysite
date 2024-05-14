import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
  selector: 'experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExperiencePage implements OnInit {
  private stateService = inject(GlobalStateServiceService)
  data: DataModel | null = null;

  ngOnInit() {
    this.stateService.data.subscribe(update => this.data = update) 
  }
}
