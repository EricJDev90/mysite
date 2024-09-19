import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
  selector: 'sspdf',
  templateUrl: 'sspdf.page.html',
  styleUrls: ['sspdf.page.scss'],
  standalone: true,
  imports: [IonItem, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SSPDFPage implements OnInit {
  private stateService = inject(GlobalStateService);
  data: DataModel | null = null
  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }
}
