import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user occupation="Angular Developer"><app-user/>
  `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {}
