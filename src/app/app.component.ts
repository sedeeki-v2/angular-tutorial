import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { UserComponent } from './user.component';


@Component({
  selector: 'app-root',
  template: `
    <app-user/>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserComponent],
})
export class AppComponent {}
