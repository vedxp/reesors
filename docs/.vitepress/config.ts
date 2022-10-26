import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Reesors",
  titleTemplate: 'false',
  description: "A cozy 😌 collection of free resources for developers and designers curated with ♥️",
  lang: "en-US",
  appearance: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
  logo: '/navlogo.png',

  editLink: {
      pattern: "https://github.com/VedxP/reesors/edit/main/docs/sections/",
      text: "Improve This Page!"
    },
   
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2022-present VedxP" },
      
      nav: [
      { text: 'Home', link: '/' },
      { text: 'Explore', link: '/sections/', activeMatch: '/sections' },
      { text: 'GitHub', link: 'https://github.com/VedxP/reesors' }
        ],
    
    sidebar: [
      {
        text: "All Sections",
        items: [
          { text: "Animations", link: "/sections/" },
          { text: "App Dev", link: "/sections/app" },
           { text: "Colors", link: "/sections/colors" },
          { text: "Github Actions", link: "/sections/actions" },
           { text: "Icons", link: "/sections/icons" },
          { text: "Illustrations", link: "/sections/illustrations" },
           { text: "Images", link: "/sections/images" },
          { text: "Learning", link: "/sections/learning" },
           { text: "Misc", link: "/sections/misc" },
          { text: "Mockups", link: "/sections/mockups" },
           { text: "Tools", link: "/sections/tools" },
          { text: "Typefaces", link: "/sections/typefaces" },
           { text: "Vue", link: "/sections/vue" },
          { text: "Web Tools", link: "/sections/webtools" }
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
