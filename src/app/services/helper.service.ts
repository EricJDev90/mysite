import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  getKeysByValue<T>(obj: {[key: string]: string;}, value: T): string[] {
    return Object.keys(obj).filter(key => obj[key] === value);
  }
}
