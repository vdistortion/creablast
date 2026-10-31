import { RenderMode, ServerRoute } from '@angular/ssr';
import { projects } from './content/projects';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'work/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return projects.map(({ id }) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
