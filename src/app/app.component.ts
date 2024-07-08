import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    @if (isLoggedIn) {
      <p>You are logged in!</p>
    } @else {
      <p>You are not logged in!</p>
    }
  
  `,
  standalone: true,
  imports: [],
})
export class AppComponent {
  isLoggedIn = false;
}

