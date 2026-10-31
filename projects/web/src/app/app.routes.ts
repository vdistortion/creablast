import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, Router, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { environment } from '../environments/environment';
import { getProject } from './content/projects';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    title: `${environment.PAGE_NAME_MAIN} — ${environment.SITE_NAME}`,
    component: MainPageComponent,
    data: {
      description:
        'Enesha — creative copywriter. Digital campaigns, social media and special projects.',
    },
  },
  {
    path: 'work',
    title: `${environment.PAGE_NAME_WORK} — ${environment.SITE_NAME}`,
    component: WorkPageComponent,
    data: {
      description:
        'Selected creative projects by Enesha: campaigns for Wish, JBL, KIA, Pepsico and more.',
    },
  },
  {
    path: 'work/:id',
    component: ProjectPageComponent,
    title: (route) =>
      `${getProject(route.paramMap.get('id'))?.title ?? 'Project'} — ${environment.SITE_NAME}`,
    resolve: {
      project: (route: ActivatedRouteSnapshot) =>
        getProject(route.paramMap.get('id')) ??
        new RedirectCommand(inject(Router).parseUrl('/not-found')),
    },
  },
  {
    path: 'about',
    title: `${environment.PAGE_NAME_ABOUT} — ${environment.SITE_NAME}`,
    component: AboutPageComponent,
    data: {
      description:
        'Meet Enesha, creative copywriter: advertising education, agency experience and creative awards.',
    },
  },
  {
    path: 'not-found',
    title: `Page not found — ${environment.SITE_NAME}`,
    component: NotFoundPageComponent,
    data: {
      noindex: true,
      description: 'This page could not be found. Explore projects by Enesha.',
    },
  },
  {
    path: '**',
    title: `Page not found — ${environment.SITE_NAME}`,
    component: NotFoundPageComponent,
    data: {
      noindex: true,
      description: 'This page could not be found. Explore projects by Enesha.',
    },
  },
];
