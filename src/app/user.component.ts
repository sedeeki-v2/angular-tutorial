import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <div class="image-container">
          <img ngSrc="/assets/favicon.ico" height="60" width="80" priority alt="Angular logo" />
        </div>
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" height="60" width="80" [alt]="logoAlt" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/favicon.ico';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
