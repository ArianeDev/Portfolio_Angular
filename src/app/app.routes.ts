import { Routes } from '@angular/router';
import { Home } from './Page/home/home';
import { AboutMe } from './Page/about-me/about-me';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'aboutme',
        component: AboutMe
    }
];
