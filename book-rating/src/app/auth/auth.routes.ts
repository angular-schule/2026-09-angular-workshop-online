import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login-page/login-page').then(m => m.LoginPage),
        title: 'Login'
    },
];
