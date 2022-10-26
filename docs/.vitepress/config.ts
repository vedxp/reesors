import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Reesors",
  titleTemplate: false,
  description: "A cozy 😌 collection of free resources for developers and designers curated with ♥️",
  lang: "en-US",
  appearance: false,
  cleanUrls: "without-subfolders",

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
  })
