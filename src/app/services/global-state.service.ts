import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CipherKeyModel, DataModel, DataType } from '../types/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private dataSource = new BehaviorSubject<DataModel | null>(null);
  private cipherSource = new BehaviorSubject<CipherKeyModel | null>(null);
  data = this.dataSource.asObservable();
  cipherKey = this.cipherSource.asObservable();

  setData(data: any, dataType: DataType) {

    switch (dataType) {
      case DataType.COREDATA:
        this.dataSource.next(data);
        break;
      case DataType.CIPHERDATA:
        this.cipherSource.next(data);
    }
    
  }
}
