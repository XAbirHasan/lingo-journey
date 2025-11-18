import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lingo Journey',
  description: 'My personal language-learning journey with vocab, grammar, and speaking practice',
  
  base: '/lingo-journey/',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'A1', link: '/en/a1/' },
          { text: 'A2', link: '/en/a2/' },
          { text: 'B1', link: '/en/b1/' },
          { text: 'B2', link: '/en/b2/' },
          { text: 'IELTS', link: '/en/ielts/' }
        ],
        sidebar: {
          '/en/a1/': [
            {
              text: 'A1 - Beginner',
              items: [
                { text: 'Vocabulary', link: '/en/a1/vocabulary' },
                { text: 'Grammar Workbook', link: '/en/a1/grammar-workbook' },
                { text: 'Speaking Practice', link: '/en/a1/speaking-practice' }
              ]
            }
          ],
          '/en/a2/': [
            {
              text: 'A2 - Elementary',
              items: [
                { text: 'Vocabulary', link: '/en/a2/vocabulary' },
                { text: 'Grammar Workbook', link: '/en/a2/grammar-workbook' },
                { text: 'Speaking Practice', link: '/en/a2/speaking-practice' }
              ]
            }
          ],
          '/en/b1/': [
            {
              text: 'B1 - Intermediate',
              items: [
                { text: 'Vocabulary', link: '/en/b1/vocabulary' },
                { text: 'Grammar Workbook', link: '/en/b1/grammar-workbook' },
                { text: 'Speaking Practice', link: '/en/b1/speaking-practice' }
              ]
            }
          ],
          '/en/b2/': [
            {
              text: 'B2 - Upper Intermediate',
              items: [
                { text: 'Vocabulary', link: '/en/b2/vocabulary' },
                { text: 'Grammar Workbook', link: '/en/b2/grammar-workbook' },
                { text: 'Speaking Practice', link: '/en/b2/speaking-practice' }
              ]
            }
          ],
          '/en/ielts/': [
            {
              text: 'IELTS Vocabulary Plan',
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
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XAbirHasan/lingo-journey' }
    ],
    search: {
      provider: 'local'
    }
  }
})
