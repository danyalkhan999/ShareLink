import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  private isAuthenticated = false;
  login(email: string, password: string) {
    const user = {
      email: email,
      password: password,
    };
    this.userService.setUser(user);
  }

  logout() {
    this.userService.clearUser();
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}
