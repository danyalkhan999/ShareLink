import { UsersService } from 'src/app/Services/users.service';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private userService: UserService,
    private router: Router
  ) {}

  profileForm: FormGroup;

  users = this.usersService.getUsers();
  user = JSON.parse(this.userService.getUser());

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  profileSubmit() {
    if (this.profileForm.valid) {
      let username = this.profileForm.get('username').value;
      let description = this.profileForm.get('description').value;
      console.log(username, description);
      this.router.navigate(['sharelink/postfeed']);
    }
  }
}
