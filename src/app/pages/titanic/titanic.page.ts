import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { TitanicPageData } from 'src/app/types/globalTypes';

@Component({
  selector: 'titanic',
  templateUrl: './titanic.page.html',
  styleUrls: ['./titanic.page.scss'],
  imports: [IonContent, IonTitle, CommonModule, FormsModule]
})
export class TitanicPage  implements OnInit {

  private stateService = inject(GlobalStateService);
  titanicPageData: TitanicPageData | undefined;

  ngOnInit() {
    this.stateService.data.subscribe(updates => this.titanicPageData = updates?.TitanicPage)
  }
}
