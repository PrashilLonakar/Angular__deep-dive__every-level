import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkModeOn$ = this.darkModeSubject.asObservable();

  constructor() {}

  switchMode(isDarkMode: boolean) {
    this.darkModeSubject.next(isDarkMode);
  }

  getMode() {
    return this.darkModeSubject.value;
  }
}
