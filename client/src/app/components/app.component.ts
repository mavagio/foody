import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {slideInAnimation} from "../animations/animations";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
  ],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService) {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
