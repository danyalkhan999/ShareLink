import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css'],
})
export class PostfeedComponent {
  constructor(private dailog: MatDialog) {}
  onCreatePostClick() {}
}
