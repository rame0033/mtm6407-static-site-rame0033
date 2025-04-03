import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Calgary Tourism",
  description: "A Vitepress site - static site for Web Dev IV",
  themeConfig: {
    logo: 'https://omni.gds.earth/storage/public_website/destination_logos/6Rm4xz9Gg1dzmZB0YeAEwfdVbktoZcZyGILzpIq3.jpg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Explore',
        items: [
          {text: 'Attractions', link: './attractions'},
          {text: 'Food', link: './food'},
          {text: 'Adventures', link: './adventure'},
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],
    footer: {
      message: '',
      copyright: '&copy; All assets used in this site are courtesy of Pexels and Calgary Tourism website.',
    }
  }
})
