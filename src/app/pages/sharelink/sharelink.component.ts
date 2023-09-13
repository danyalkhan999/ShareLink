import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sharelink',
  templateUrl: './sharelink.component.html',
  styleUrls: ['./sharelink.component.css'],
})
export class SharelinkComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
