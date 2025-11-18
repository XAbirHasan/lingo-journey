import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lingo Journey',
  description: 'My personal language-learning journey with vocab, grammar, and speaking practice',
  
  base: '/lingo-journey/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'English', link: '/en/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XAbirHasan/lingo-journey' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/en/': [
        {
          text: 'A1 - Beginner',
          collapsed: false,
          items: [
            { text: 'Vocabulary', link: '/en/a1/vocabulary' },
            { text: 'Grammar Workbook', link: '/en/a1/grammar-workbook' },
            { text: 'Speaking Practice', link: '/en/a1/speaking-practice' }
          ]
        },
        {
          text: 'A2 - Elementary',
          collapsed: false,
          items: [
            { text: 'Vocabulary', link: '/en/a2/vocabulary' },
            { text: 'Grammar Workbook', link: '/en/a2/grammar-workbook' },
            { text: 'Speaking Practice', link: '/en/a2/speaking-practice' }
          ]
        },
        {
          text: 'B1 - Intermediate',
          collapsed: false,
          items: [
            { text: 'Vocabulary', link: '/en/b1/vocabulary' },
            { text: 'Grammar Workbook', link: '/en/b1/grammar-workbook' },
            { text: 'Speaking Practice', link: '/en/b1/speaking-practice' }
          ]
        },
        {
          text: 'B2 - Upper Intermediate',
          collapsed: false,
          items: [
            { text: 'Vocabulary', link: '/en/b2/vocabulary' },
            { text: 'Grammar Workbook', link: '/en/b2/grammar-workbook' },
            { text: 'Speaking Practice', link: '/en/b2/speaking-practice' }
          ]
        },
        {
          text: 'IELTS Vocabulary Plan',
          collapsed: false,
          items: [
            { text: 'Day 01', link: '/en/ielts/day-01' },
            { text: 'Day 02', link: '/en/ielts/day-02' },
            { text: 'Day 03', link: '/en/ielts/day-03' },
            { text: 'Day 04', link: '/en/ielts/day-04' },
            { text: 'Day 05', link: '/en/ielts/day-05' },
            { text: 'Day 06', link: '/en/ielts/day-06' },
            { text: 'Day 07', link: '/en/ielts/day-07' },
            { text: 'Day 08', link: '/en/ielts/day-08' },
            { text: 'Day 09', link: '/en/ielts/day-09' },
            { text: 'Day 10', link: '/en/ielts/day-10' }
          ]
        }
      ]
    }
  }
})

