import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.routes').then(m => m.INBOX_ROUTES)
    }
];
