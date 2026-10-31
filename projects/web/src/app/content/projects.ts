export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  srcset?: string;
}

interface ProjectBase {
  id: string;
  title: string;
  description: string;
  image: ProjectImage;
}

export interface VideoProject extends ProjectBase {
  kind: 'video';
  videoId: string;
}

export interface PresentationProject extends ProjectBase {
  kind: 'presentation';
}

export type Project = VideoProject | PresentationProject;

export const projects: readonly Project[] = [
  {
    id: 'wish',
    title: 'Wish x Young Glory entrance',
    description: 'Christmas COVID special',
    image: {
      src: 'wish-480.webp',
      width: 480,
      height: 480,
      srcset:
        '/images/projects/wish-320.webp 320w, /images/projects/wish-480.webp 480w, /images/projects/wish-864.webp 864w',
    },
    kind: 'video',
    videoId: 'ucEP9Of57Xg',
  },
  {
    id: 'jbl',
    title: 'JBL 75 years',
    description: 'Digital special',
    image: { src: 'jbl.webp', width: 323, height: 215 },
    kind: 'video',
    videoId: 'Yo-fkk8n_YA',
  },
  {
    id: 'kia',
    title: 'KIA MOHAVE',
    description: 'Celebrity endorsement',
    image: { src: 'kia.webp', width: 346, height: 346 },
    kind: 'video',
    videoId: 'Crwv5BxKISA',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    description: 'Social impact',
    image: { src: 'afcon.webp', width: 254, height: 452 },
    kind: 'video',
    videoId: 'Ml-ywUosb2w',
  },
  {
    id: 'pepsico',
    title: 'Domik v derevne (Pepsico)',
    description: 'Packaging activation',
    image: { src: 'pepsico.webp', width: 259, height: 221 },
    kind: 'presentation',
  },
  {
    id: 'meller',
    title: 'Meller film',
    description: 'OLV',
    image: {
      src: 'meller-480.webp',
      width: 480,
      height: 480,
      srcset:
        '/images/projects/meller-320.webp 320w, /images/projects/meller-480.webp 480w, /images/projects/meller-864.webp 864w',
    },
    kind: 'video',
    videoId: '9ruI23-4Q_k',
  },
];

export function getProject(id: string | null): Project | undefined {
  return projects.find((project) => project.id === id);
}
