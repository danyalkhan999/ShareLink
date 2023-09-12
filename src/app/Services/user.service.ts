import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem('user');
  }

  clearUser() {
    localStorage.removeItem('user');
  }
}
