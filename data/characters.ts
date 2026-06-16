export interface RoleSubItem {
  label: string;
  text: string;
  imageSrc?: string;
  imageLabel: string;
}

export interface RoleBlock {
  label: string;
  text?: string;
  subItems?: RoleSubItem[];
}

export const theRoleBlocks: RoleBlock[] = [
  {
    label: 'What You Would Be Making',
    text: 'You will spearhead the entire artistic direction for the game. Currently we need 4 types of assets. Sprite Sheets, Tilesets, Cutscene Images and Talking Heads.',
    subItems: [
      {
        label: 'Sprite Sheets',
        text: 'Each of the four playable characters, alongside enemies need full animation set: idle, walk, run, attack states, hit reactions, death, and other specifics to be shared after reaching out.',
        imageSrc: '/role/sprite-sheets.png',
        imageLabel: 'Sprite sheet example',
      },
      {
        label: 'Tilesets',
        text: 'The prologue spans just one environment plus a boss arena. Each world after that can be worked on afterwards should the demo be completed.',
        imageSrc: '/role/tilesets.png',
        imageLabel: 'Tileset example',
      },
      {
        label: 'Cutscenes',
        text: 'Key story beats are delivered through illustrated panels, a deliberate choice that keeps scope realistic and lets the art breathe.',
        imageSrc: '/role/cutscenes.jpg',
        imageLabel: 'Cutscene panel example',
      },
      {
        label: 'Talking Heads',
        text: 'Talking Heads are the images that display when a character is talking. (For the purposes of the demo, I don\'t expect this degree of detail)',
        imageSrc: '/role/talking-heads.png',
        imageLabel: 'Talking head example',
      },
    ],
  },
  {
    label: 'Scope',
    text: 'The immediate focus is a playable prologue demo, tight in scope and built to establish the game\'s world and tone. Once the demo is complete, production moves into Act 1: Auren, an Asian-influenced island city built on an archipelago and lit by lanterns and warm gold light. Three full acts follow after that, each with its own world and visual identity.',
  },
  {
    label: 'Style Direction',
    text: 'The reference points are Crypt Custodian as a grounded baseline and Spiritfarer as the emotional aspiration. Both are non-pixel-art 2D, and so is the target for this game. Beyond that, these are reference points rather than requirements. What matters most is warmth, emotional readability, and a style that can carry a story. If your work lives in a similar register without matching those games, feel free to reach out too.',
  },
  {
    label: 'How to Apply',
    text: 'Use the contact form below. Include a link to your portfolio and a short note about what drew you to the project. That is enough to start a conversation.',
  },
];

export interface SocialLink {
  id: number;
  name: string;
  href: string;
  imgSrc?: string;
}

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'Twitter / X', href: '#', imgSrc: '/social/twitter.svg' },
  { id: 2, name: 'Discord', href: '#', imgSrc: '/social/discord.svg' },
];

export interface Character {
  id: string;
  name: string;
  role: string;
  cardImage: string;
  detailImages: string[];
  shortDescription: string;
  detailDescription: string;
  characterText: string;
  worldText: string;
  briefText: string;
  freeform?: boolean;
  freeformText?: string;
}

export interface World {
  id: string;
  name: string;
  description: string;
  images: string[];
}

export const worlds: World[] = [
  {
    id: 'in-between',
    name: 'The In-Between',
    description: 'The In-Between is the first world the player enters and where the whole party forms. It is also where active development is happening now. This is the work.',
    images: [
      '/worlds/in-between/1.jpg',
      '/worlds/in-between/2.jpg',
      '/worlds/in-between/3.png',
      '/worlds/in-between/4.png',
      '/worlds/in-between/5.jpg',
      '/worlds/in-between/6.jpg',
    ],
  },
];

export const characters: Character[] = [
  {
    id: 'dew',
    name: 'Dew',
    role: 'Everyone else first',
    cardImage: '/character_header/dew_character_profile.png',
    detailImages: [
      '/character_cards/dew/dew_char_card.jpg',
      '/character_cards/dew/dew_char_card2.jpg',
    ],
    shortDescription:
      'She holds people together by putting herself last. She is very good at it.',
    detailDescription:
      '[DEW DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    characterText:
      'The first character you meet in the Void World. Dew is a small white rabbit with a red scarf, the only thing she\'s brought from home. She pays attention to everyone around her. She is genuinely, quietly good.',
    worldText:
      'Dew\'s home is a world of persistent rain. Dense canopy, grey light, wet ground in a rainforest that does not pause and a colony that does not stop moving. It surfaces across the game as brief dream sequences: desaturated, quiet, short. The visual language is migratory and functional. The grey of a life that never asked.',
    briefText:
      'The red scarf stays, always. Her ears are her primary emotional indicator, dropping and lifting before she says a word. Everything else, her fur, her clothing, the full design of the colony and its inhabitants, is yours.',
  },
  {
    id: 'liora',
    name: 'Liora',
    role: 'Warmest Person in the Room',
    cardImage: '/character_header/liora_character_profile.png',
    detailImages: ['/character_cards/liora/liora_char_card.jpg', '/character_cards/liora/liora_char_card2.png'],
    shortDescription:
      'She holds rooms together without trying. She has never applied that to herself.',
    detailDescription:
      '[LIORA DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    characterText:
      ' Liora is a dove with a small crystal fragment on a string around her neck. She is the warmest person in any room she enters, and is the sharpest at reading rooms and people. What she cannot do is turn any of that on herself.',
    worldText:
      'Auren is a city of lanterns built on an island archipelago, warm and communal and genuinely beautiful. Its culture is built around partnership as a destination, the thing that makes a life complete. Couples everywhere, shared meals, lantern festivals on the water. It is lovely in a way that makes the question underneath it harder to hear.',
    briefText:
      'The crystal fragment stays: a small piece on a string around her neck, shaped like a dragon\'s tooth. Everything else, her plumage, silhouette, clothing, the full visual design of Auren and its inhabitants, the lantern and natural island aesthetic of the city, is yours. Supporting characters included. Full references shared on confirmation.',
  },
  {
    id: 'cael',
    name: 'Cael',
    role: 'The last line of defence.',
    cardImage: '/character_header/cael_character_profile.png',
    detailImages: [
      '/character_cards/cael/cael_char_card.jpg',
      '/character_cards/cael/image.png',
    ],
    shortDescription:
      'Behind his left ear: two seeds, pressed together. They catch the light differently from everything else.',
    detailDescription:
      '[CAEL DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    characterText:
      'Cael is a battle-worn bipedal wolf, scarred and built like the last line of defence. He says what he means and not much else. Behind his left ear: two amber-gold seeds pressed together, interlocked, catching the light differently from everything else. He has never taken them off.',
    worldText:
      'The Tundra is open, white, and enormous. Wolf packs, frozen ground, aurora sky. Its culture is built around a ritual of letting go, children sent into the world alone when they are ready, trusted to find their own way. The visual language is vast and cold and functional. Nothing decorative. Nowhere to hide.',
    briefText:
      'The two amber-gold seeds behind his left ear stay. Everything else, his build, his scarring, his armour, the tundra and its wolf pack inhabitants, are yours. Supporting characters included. Full references shared on confirmation.',
  },
  {
    id: 'squibbles',
    name: 'Squibbles',
    role: 'Fart Jokes and Laser Beams',
    cardImage: '/character_header/squibbles_character_profile.png',
    detailImages: ['/character_cards/squibbles/squibbles_char_card.jpg', '/character_cards/squibbles/squibbles_char_card2.png'],
    shortDescription:
      'His technology runs the city. The city has never once wondered whose it is.',
    detailDescription:
      '[SQUIBBLES DETAIL TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    characterText:
      'Squibbles is a nerdy, animated octopus whose tentacles never stop moving when he is talking. Boundlessly enthusiastic, quick with a terrible joke, warm toward everyone he meets. There is a completely different face underneath all that motion. He has never stopped long enough to show anyone.',
    worldText:
      'Valoria sits beneath the ocean inside a vast pressurised dome. Bioluminescent towers, neon bleeding into deep water, layered districts cascading to the ocean floor. It was built on a promise: that what you make is all that matters, that talent is the only passport you need. The visual language is dense, luminous, and technically intricate.',
    briefText:
      'Squibbles deploys small floating weapon units in combat, his own invention, that orbit him and attack independently. They exist and they are mechanical. Everything about their design, shape, size and personality is yours. His full character design, Valoria and its inhabitants, all of it is yours too. Supporting characters included. Full references shared on confirmation.',
  },
  {
    id: 'godrat',
    name: 'A Rat?',
    role: 'Not not helping',
    cardImage: '/character_header/godrat_character_profile.png',
    detailImages: ['/character_cards/godrat/EAT_DA_PIZZA.png'],
    shortDescription:
      'He has been here longer than the worlds. He is finishing his pizza.',
    detailDescription:
      'He has been here longer than the worlds. He is finishing his pizza.',
    characterText:
      '[GODRAT CHARACTER TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    worldText:
      '[GODRAT WORLD TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
    briefText:
      '[GODRAT BRIEF TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    freeform: true,
    freeformText:
      'God Rat is a scruffy, unhurried rat who is almost always eating. He was here before the worlds existed. He will be here after. He is the first character the player meets. \n He will say their name before they have given it.',
  },
];
