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
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-ZLRHJBGCPE', async: 'async' }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
      
        gtag('config', 'G-ZLRHJBGCPE');`
    ]
  ],

  themeConfig: { 
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2022-present VedxP" },

  nav: [
    { text: 'GitHub', link: 'https://github.com/VedxP/reesors' },
    { text: 'VedxP', link: 'https://vedxp.vercel.app/' }
  ],
   }
  }
)
