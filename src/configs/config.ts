export const siteConfig: {
  baseUrl: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://www.ljsartika.com/',
  author: 'Lasria Joynetta Sartika',
  author_surname: 'Sartika',
  titlePrefix: 'Lasria Joynetta Sartika',
  profile_image:
    'https://media.licdn.com/dms/image/v2/D5603AQEVfZ617SWqxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704687622883?e=1744243200&v=beta&t=8eAuxCknbP6d3-AlJy-xChhF79efe8I9MzZYBXwtE8c',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/muhammadfiaz',
    sponsor: 'https://ljsartika.medium.com/',
    email: 'ljsartika@gmail.com',
    twitter: '@ljsartika',
    github: 'https://github.com/LJSartika',
    linkedin: 'https://www.linkedin.com/in/ljsartika/',
    blog: 'https://www.ljsartika.com/',
    medium: 'https://ljsartika.medium.com/',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/FiazTechnologies',
    daily_dev: {
      username: 'muhammadfiaz',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    }
  },
  metadata: {
    description: `Hi! I'm Lasria Joynetta Sartika, a Project Management Trainee exploring project management, sharing insights on growth, productivity, and the lessons I've learned along the way. Continuous learning after all. Let's connect!`,
    keywords:
      'Lasria Joynetta Sartika, Project Management, Lasria Joynetta Sartika portfolio, Lasria Joynetta Sartika GitHub, PMI, Visualization, Construction, Interior Design, Project Engineer, Medium Writter, ChatGPT',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};
