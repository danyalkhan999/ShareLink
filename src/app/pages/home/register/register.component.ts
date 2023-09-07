import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  loginClick() {
    this.homeService.toggleRegisterActive();
  }
}
