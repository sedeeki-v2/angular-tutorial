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
    <button (click)="greet()">
      <section (mouseover)="onMouseOver()">
        There's a secret message for you, hover to reveal 👀
        {{ message }}
      </section>
    </button>
  `,
  standalone: true,
  imports: [],
})
export class AppComponent {

  message = "";

  greet() {
    console.log("Hi there, my name is Omar!");
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}

