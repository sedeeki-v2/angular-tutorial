import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user/>
  `,
  standalone: true,
  imports: [CommentsComponent, UserComponent],
})
export class AppComponent {}
  