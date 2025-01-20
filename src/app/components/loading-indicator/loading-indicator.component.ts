import { AsyncPipe } from '@angular/common';
import { Component, ContentChild, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { IonSpinner } from '@ionic/angular/standalone';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  imports: [IonSpinner, AsyncPipe]
})
export class LoadingIndicatorComponent  implements OnInit {
  @Input() detectRouteTransitions = false;
  @ContentChild("loading") customLoadingIndicator: TemplateRef<any> | null = null;
  loading$: Observable<boolean> | null = null;
  private loadingService = inject(LoadingService);
  private router = inject(Router);

  ngOnInit() {
    this.loading$ = this.loadingService.loading$;
    if (this.detectRouteTransitions) {
      this.router.events.pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingService.loadingOff();
          }
        })
      ).subscribe();
    }
  }
}
