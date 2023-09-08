import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { gsap, Power0 } from 'gsap';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(private location: Location) {}
  ngOnInit(): void {
    // GSAP animation code here
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo(
      '#left-eyeboll',
      { x: 3 },
      { x: -3, duration: 0.5, ease: Power0.easeNone }
    ).fromTo(
      '#right-eyeboll',
      { x: 3 },
      { x: -3, duration: 0.5, ease: Power0.easeNone },
      0
    );
  }
  simmonGoBack() {
    this.location.back();
  }
}
