import { Component, OnInit, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    imports: [IonContent]
})
export class HomePage implements OnInit {
  private stateService = inject(GlobalStateService);
  data: DataModel | null = null
  developerDescActive = false;
  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }
}
