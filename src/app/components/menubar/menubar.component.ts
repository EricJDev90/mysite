import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonMenu, IonMenuToggle, IonMenuButton, IonButtons, MenuController} from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, 
    IonToolbar,
    IonTitle, 
    IonContent, 
    IonButton, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    IonIcon, 
    IonMenu, 
    IonMenuToggle, 
    IonMenuButton, 
    IonButtons
  ]
})
export class MenubarComponent  implements OnInit {
  private stateService = inject(GlobalStateService)
  data: DataModel | null = null;
  private menu = inject(MenuController)
  
  ngOnInit() {
    addIcons({ ...icons });
    this.stateService.data.subscribe(update => this.data = update)
  }

  closeMenu() {
    this.menu.close();
  }
}
