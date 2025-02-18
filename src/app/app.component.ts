import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenubarComponent } from './components/menubar/menubar.component';
import { GlobalStateService } from './services/global-state.service';
import { DataModel } from './types/globalTypes';
import * as data from '../assets/data/data.json';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonApp, IonRouterOutlet, MenubarComponent, LoadingIndicatorComponent]
})
export class AppComponent implements OnInit {
  private stateService = inject(GlobalStateService)
  data: DataModel | null = null;

  ngOnInit(): void {
    this.stateService.data.subscribe(update => this.data = update) 
    this.stateService.setData(data)
  }
}
