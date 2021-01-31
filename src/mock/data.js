import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sarah Dakkak', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sarah Dakkak',
  subtitle: 'Full-Stack Developer',
  cta: '',
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarah-dakkak/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sarahdakkak1',
    },
  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://filebin.net/ly48xeafu8a8yoiq/SARAH_DAKKAK_CV.pdf?t=9323id88', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Peachy Packing',
    info: 'An app that catalogues your belongings with specific QR codes, tags, and exact locations within packing & storage',
    info2: '',
    url: 'https://peachypacking.herokuapp.com',
    repo: 'https://github.com/patrickmcanuff/peachypacking', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Breaking Bad',
    info: 'An app build on React that lets you search every character from the Breaking Bad series',
    info2: '',
    url: 'http://breakng-bad-app.herokuapp.com/',
    repo: 'https://github.com/sarahdakkak1/react-breaking-bad', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Air-moto',
    info: 'A marketplace where you can list, or rent a motorcycle anywhere in the world.',
    info2: '',
    url: 'https://air-moto.herokuapp.com',
    repo: 'https://github.com/patrickmcanuff/air-moto', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Budget Calculator',
    info: 'An app where you can list your revenues and expenses and see the total',
    info2: '',
    url: 'https://angular-budgets-app.herokuapp.com/',
    repo: 'https://github.com/sarahdakkak1/angular-budget-app', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Mister-Cocktail',
    info: 'A cocktail listing and creation platform. Users can view cocktails listed and add their own creation.',
    info2: '',
    url: 'https://rails-mister-cocktails-new.herokuapp.com',
    repo: 'https://github.com/sarahdakkak1/rails-mister-cocktail', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sarah.dakkak1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarah-dakkak/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sarahdakkak1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
