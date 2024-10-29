import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonItem, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private stateService = inject(GlobalStateService);
  data: DataModel | null = null
  developerDescActive = false;
  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }
}
