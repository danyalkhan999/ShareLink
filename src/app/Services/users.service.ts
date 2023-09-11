import { Injectable } from '@angular/core';

interface User {
  name: {
    firstname: string;
    secondname: string;
  };
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
}
