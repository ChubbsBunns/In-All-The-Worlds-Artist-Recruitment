export interface RoleBlock {
  label: string;
  text: string;
}

export const theRoleBlocks: RoleBlock[] = [
  {
    label: 'About the Dev',
    text: '[ABOUT DEV TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'Project State',
    text: '[PROJECT STATE TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    label: 'Creative Scope',
    text: '[SCOPE TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    label: "Just handle the art, I'll handle absoulutely everything else",
    text: '[NO CODE TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: "What I'm Looking For",
    text: '[LOOKING FOR TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];

export interface Character {
  id: string;
  name: string;
  role: string;
  cardImage: string;
  detailImages: string[];
  shortDescription: string;
  detailDescription: string;
}

export const characters: Character[] = [
  {
    id: 'dew',
    name: 'Dew',
    role: 'Everyone else first',
    cardImage: '/character_header/dew_character_profile.png',
    detailImages: [
      '/characters/dew/detail-1.png',
      '/characters/dew/detail-2.png',
    ],
    shortDescription:
      'She holds people together by putting herself last. She is very good at it.',
    detailDescription:
      '[DEW DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 'liora',
    name: 'Liora',
    role: 'Warmest Person in the Room',
    cardImage: '/character_header/liora_character_profile.png',
    detailImages: ['/characters/liora/detail-1.png'],
    shortDescription:
      'She holds rooms together without trying. She has never applied that to herself.',
    detailDescription:
      '[LIORA DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 'cael',
    name: 'Cael',
    role: 'The last line of defence.',
    cardImage: '/character_header/cael_character_profile.png',
    detailImages: [
      '/characters/cael/detail-1.png',
      '/characters/cael/detail-2.png',
      '/characters/cael/detail-3.png',
    ],
    shortDescription:
      'Behind his left ear: two seeds, pressed together. They catch the light differently from everything else.',
    detailDescription:
      '[CAEL DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 'squibbles',
    name: 'Squibbles',
    role: 'Fart Jokes and Laser Beams',
    cardImage: '/character_header/squibbles_character_profile.png',
    detailImages: ['/characters/squibbles/detail-1.png'],
    shortDescription:
      'He built the city\'s bones. The city has no idea.',
    detailDescription:
      '[SQUIBBLES DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 'godrat',
    name: 'A Rat?',
    role: 'Not not helping',
    cardImage: '/character_header/godrat_character_profile.png',
    detailImages: ['/characters/squibbles/detail-1.png'],
    shortDescription:
      'He has been here longer than the worlds. He is finishing his pizza.',
    detailDescription:
      'He has been here longer than the worlds. He is finishing his pizza.',
  },
];
