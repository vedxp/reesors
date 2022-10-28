import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Reesors",
  titleTemplate: false,
  description: "A cozy 😌 collection of free resources for developers and designers curated with ♥️",
  lang: "en-US",
  appearance: true,
  cleanUrls: "without-subfolders",

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['link', { rel: "apple-mobile-web-app-title", content: "Reesors"}],
    ['meta', { name: "application-name", content: "Reesors"}],
    ['meta', { name: "msapplication-TileColor", content: "#da532c"}],
    ['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}]
  ],

  themeConfig: {
  editLink: {
      pattern: "https://github.com/VedxP/reesors-v2/edit/main/docs/:path",
      text: "Improve This Page!"
    },
   
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2022-present VedxP" },
      
      nav: [
      { text: 'Home', link: '/' },
      { text: 'Explore', link: '/sections/' },
      { text: 'GitHub', link: 'https://github.com/VedxP/reesors' }
        ],
    
    sidebar: [
      {
        text: "All Sections",
        items: [
          { text: "Animations", link: "/sections/" },
          { text: "App Dev", link: "/sections/app" },
          { text: "Colors", link: "/sections/color" },
          { text: "Github", link: "/sections/github" },
          { text: "Icons", link: "/sections/icon" },
          { text: "Illustrations", link: "/sections/illustration" },
          { text: "Images", link: "/sections/image" },
          { text: "Learning", link: "/sections/learning" },
          { text: "Misc", link: "/sections/misc" },
          { text: "Mockups", link: "/sections/mockup" },
          { text: "Tools", link: "/sections/tool" },
          { text: "Typefaces", link: "/sections/typeface" },
          { text: "Vue", link: "/sections/vue" },
          { text: "Web Tools", link: "/sections/webtool" }
        ]
      }
    ],
  algolia: {
    appId: '',
    apiKey: '',
    indexName: ''
    },
   }
  }
)
