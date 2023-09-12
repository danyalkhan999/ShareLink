import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const currUser = JSON.parse(localStorage.getItem('user'));
  const users = JSON.parse(localStorage.getItem('users'));
  let loginUser = null;

  users.forEach((user) => {
    if (user.email === currUser.email) {
      loginUser = user;
    }
  });

  if (loginUser) {
    if (loginUser.password === currUser.password) {
      return true;
    }
  }

  return false;
};
