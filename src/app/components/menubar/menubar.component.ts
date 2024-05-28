import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon} from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { DataModel } from 'src/app/types/globalTypes';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterOutlet, RouterLink, RouterLinkActive, IonIcon]
})
export class MenubarComponent  implements OnInit {
  private stateService = inject(GlobalStateServiceService)
  data: DataModel | null = null;
  ngOnInit() {
    this.stateService.data.subscribe(update => this.data = update)
  }
}
