import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private usersService: UsersService
  ) {}

  registerActive = false;

  ngOnInit(): void {
    this.registerActive = this.homeService.checkRegisterActive();
    console.log(this.usersService.getUsers());
  }

  registerClick() {
    if (!this.registerActive) {
      this.homeService.toggleRegisterActive();
      this.registerActive = this.homeService.checkRegisterActive();
    }
  }
}
