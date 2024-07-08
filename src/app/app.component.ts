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
  template: `<div [contentEditable]="isEditable"></div>`,
  standalone: true,
  imports: [],
})
export class AppComponent {
  isEditable = true;
}

