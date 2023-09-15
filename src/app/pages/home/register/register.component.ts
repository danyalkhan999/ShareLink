import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private usersService: UsersService,
    private router: Router,
    private userService: UserService
  ) {}

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormGroup({
          firstname: new FormControl(null, Validators.required),
          lastname: new FormControl(null, Validators.required),
        }),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      },
      { validators: this.passwordMatchValidator }
    );

    // this.registerForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
  }

  // password match validator
  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      const firstname = userData.name.firstname;
      const lastname = userData.name.lastname;
      const email = userData.email;
      const password = userData.password;

      this.usersService.addUser(firstname, lastname, email, password);

      this.registerForm.reset();
      this.userService.setUser({ email, password });
      this.router.navigate(['sharelink/create-profile']);
    }
  }

  loginClick() {
    this.homeService.toggleRegisterActive();
  }
}
