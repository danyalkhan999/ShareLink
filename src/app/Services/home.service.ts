import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private isRegisterActive: boolean = false;

  constructor() {}

  // function to toggle into login and register

  toggleRegisterActive() {
    this.isRegisterActive = !this.isRegisterActive;
  }

  // FUNCTION TO CHECK STATUS OF REGISTER-Active
  checkRegisterActive() {
    return this.isRegisterActive;
  }
}
