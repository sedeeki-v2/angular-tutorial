import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p> Framework: {{ favoriteFramework }} </p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">
      Show Framework
    </button>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
