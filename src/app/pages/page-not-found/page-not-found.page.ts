import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.page.html',
    imports: [IonContent, CommonModule, FormsModule]
})
export class PageNotFoundPage {

}
