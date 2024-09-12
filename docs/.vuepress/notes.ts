import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const roadmapNote = defineNoteConfig({
  dir: 'roadmap',
  link: '/roadmap',
  sidebar: [
    {
      text: 'Java学习路线图',
      dir: 'java',
      collapsed: false,
      items: [
        '1.basic',
        '2.advanced',
        '3.build-tool',
        '4.web-frameworks',
        '5.orm',
        '6.logging-frameworks',
        '7.jdbc',
        '8.testing'
      ]
    },
    {
      text: '后端学习路线图',
      dir: 'backend',
      collapsed: false,
      items: [
        '1.internet',
      ]
    }
  ],
})

const interviewNote = defineNoteConfig({
  dir: 'interview',
  link: '/interview',
  sidebar: undefined,
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [roadmapNote, interviewNote],
})
