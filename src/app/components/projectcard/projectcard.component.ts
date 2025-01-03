import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Project } from 'src/app/types/globalTypes';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'project-card',
  templateUrl: './projectcard.component.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, RouterLink, RouterOutlet]
})
export class ProjectCard {
    @Input() Project: Project | null = null;
 }
