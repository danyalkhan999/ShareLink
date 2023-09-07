import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: {
    firstname: string;
    secondname: string;
  };
  email: string;
  password: string;
  cnfrmPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
}
