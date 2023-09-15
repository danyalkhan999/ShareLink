import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private usersService: UsersService
  ) {}

  login(email: string, password: string) {
    // const user = {
    //   email: email,
    //   password: password,
    // };
    let loginUser = null;
    this.usersService.users.forEach((user) => {
      if (user.email === email) {
        loginUser = user;
      }
    });

    if (loginUser && loginUser.password === password) {
      this.userService.setUser({ email, password });
    }
    console.log(this.isAuthenticatedUser());
  }

  logout() {
    this.userService.clearUser();
    console.log(this.isAuthenticatedUser());
  }

  isAuthenticatedUser(): any {
    const user = this.userService.getUser() || null;
    return user != null ? true : false;
  }
}
