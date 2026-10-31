import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { Project } from './content/projects';

@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(state: RouterStateSnapshot): void {
    let route = state.root;
    while (route.firstChild) route = route.firstChild;

    const project = route.data['project'] as Project | undefined;
    const title = this.buildTitle(state) ?? environment.SITE_NAME;
    const description = project
      ? `${project.title}: ${project.description}. A project by Enesha, creative copywriter.`
      : ((route.data['description'] as string | undefined) ??
        'Enesha — creative copywriter. Digital campaigns, social media and special projects.');
    const url = new URL(state.url.split(/[?#]/)[0], environment.SITE_URL).href;
    const image = new URL('/images/about.webp', environment.SITE_URL).href;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'robots',
      content: route.data['noindex'] ? 'noindex' : 'index,follow',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Enesha, creative copywriter' });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
}
