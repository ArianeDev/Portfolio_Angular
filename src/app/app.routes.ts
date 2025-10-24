import { Routes } from '@angular/router';
import { Home } from './Page/home/home';
import { AboutMe } from './Page/about-me/about-me';
import { Projects } from './Page/projects/projects';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'aboutme',
        component: AboutMe
    },
    {
        path: 'projects/:name',
        component: Projects
    }
];
