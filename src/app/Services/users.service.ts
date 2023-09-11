import { Injectable } from '@angular/core';

interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password: string;
  // confirmPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  constructor() {
    // Retrieve users from local storage when the service is created
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const newUser: User = {
      name: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    this.users.push(newUser);
    console.log(this.users);

    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // checkEmail(email: string): boolean {
  //   this.users.forEach((user) => {
  //     if (user.email === email) return true;
  //   });
  //   return false;
  // }

  login(email: string, password: string): boolean {
    let loginUser = null;

    this.users.forEach((user) => {
      if (user.email === email) {
        loginUser = user;
      }
    });

    if (loginUser) {
      if (loginUser.password === password) {
        return true;
      }
    }

    return false;
  }
}
