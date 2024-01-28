import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    title: `${environment.PAGE_NAME_MAIN} — ${environment.SITE_NAME}`,
    component: MainPageComponent,
  },
  {
    path: 'work',
    title: `${environment.PAGE_NAME_WORK} — ${environment.SITE_NAME}`,
    component: WorkPageComponent,
  },
  {
    path: 'work/:id',
    title: `Project — ${environment.SITE_NAME}`,
    component: ProjectPageComponent,
  },
  {
    path: 'about',
    title: `${environment.PAGE_NAME_ABOUT} — ${environment.SITE_NAME}`,
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
