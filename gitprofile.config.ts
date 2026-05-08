// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bali78456',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'bali78456/Obsidian',
          'bali78456/Escape_The_Maze',
          'bali78456/Knight-In-Dungeon',
          'bali78456/PS',
          'bali78456/Algorithm-Study'
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [], // 외부 프로젝트 없으면 빈 배열
    },
  },
  seo: { title: 'Portfolio of bali78456', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // 이력서 없으면 빈 문자열
  },
  skills: [
    'C#',
    'C++',
    'C',
    'Git',
    'Unity',
  ],
  experiences: [], // 경력 없음
  certifications: [], // 자격증 없음
  educations: [
    {
      institution: '수원대학교',
      degree: '재학중 (4학년)',
      from: '2021',
      to: 'Present',
    },
  ],
  publications: [], // 논문 없음
  blog: {
    source: 'dev',
    username: '', // 블로그 없으면 빈 문자열
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
