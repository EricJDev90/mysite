import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { GlobalStateServiceService } from 'src/app/services/global-state-service.service';
import { ContactPageData } from 'src/app/types/globalTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon, CommonModule, FormsModule]
})
export class ContactPage {
  private router: Router = inject(Router);
  private stateService = inject(GlobalStateServiceService);
  contactPageData: ContactPageData | undefined;

  ngOnInit() {
    this.stateService.data.subscribe(updates => this.contactPageData = updates?.ContactPage)
  }

  navigateToLinkedIn() {
    if (this.contactPageData?.LinkedInLink) {
      this.router.navigate([this.contactPageData?.LinkedInLink])
    }
    
  }
 }
