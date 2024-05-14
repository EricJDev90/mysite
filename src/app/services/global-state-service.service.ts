import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateServiceService {
  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();

  setUserData(data: any) {
    this.dataSource.next(data);
    console.log(this.data)
  }
}
