import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { UserData } from 'src/app/types/globalTypes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private stateService = inject(GlobalStateServiceService)
  userData: UserData | null = null;
  constructor() {}

  ngOnInit() {
    this.stateService.userData.subscribe(update => this.userData = update) 
    this.stateService.setUserData({person: "Test"})
  }
}
