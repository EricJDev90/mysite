import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenubarComponent } from './components/menubar/menubar.component';
import { GlobalStateServiceService } from './services/global-state-service.service';
import { DataModel } from './types/globalTypes';
import * as data from '../assets/data/data.json';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenubarComponent],
})
export class AppComponent implements OnInit {
  private stateService = inject(GlobalStateServiceService)
  data: DataModel | null = null;

  ngOnInit(): void {
    this.stateService.data.subscribe(update => this.data = update) 
    this.stateService.setData(data)
  }
}
