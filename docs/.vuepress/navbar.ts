import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '知识体系', items: [
      '/roadmap/java/README.md',
      '/roadmap/backend/README.md',
      '/roadmap/spring-boot/README.md'
    ]
  },
  { text: '面试宝典', link: '/interview/' },
])
