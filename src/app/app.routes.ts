import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/page/dashboard';
import { Task } from './features/task/page/task';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'task',
    component: Task,
  },
];
