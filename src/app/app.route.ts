import {Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'User Page',
        component: UserComponent,
    },
];