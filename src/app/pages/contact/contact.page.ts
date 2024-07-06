import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { ContactPageData } from 'src/app/types/globalTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonIcon, CommonModule, FormsModule]
})
export class ContactPage implements OnInit {
  private router: Router = inject(Router);
  private stateService = inject(GlobalStateService);
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
