import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'work/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: 'pepsico' },
        { id: 'wish' },
        { id: 'jbl' },
        { id: 'kia' },
        { id: 'meller' },
        { id: 'afcon' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
