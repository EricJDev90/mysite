import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem } from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private stateService = inject(GlobalStateServiceService);
  data: DataModel | null = null
  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }
}
