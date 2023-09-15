import { Injectable } from '@angular/core';

interface Profile {
  username: String;
  description: String;
}
interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password: string;
  profile: Profile;
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
      profile: {
        username: '',
        description: '',
      },
    };

    this.users.push(newUser);
    console.log(this.users);

    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
