import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataModel } from '../types/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private dataSource = new BehaviorSubject<DataModel | null>(null);
  data = this.dataSource.asObservable();

  setData(data: any) {
    this.dataSource.next(data);
    console.log(this.data)
  }
}
