import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';
import { ProjectCard } from 'src/app/components/projectcard/projectcard.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProjectCard, IonCol, IonGrid, IonRow]
})
export class ProjectsPage implements OnInit {
  private stateService = inject(GlobalStateService);
  data: DataModel | null = null

  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }
}
