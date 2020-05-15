const { getFilesOf } = require('./util.js');

module.exports = {
  base: '/common_questions_for_Web_Developer/',
  assetsPublicPath: '/',
  title: "2ssue's dev note",
  plugins: ['@vuepress/last-updated'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://2ssue.github.io' },
      { text: 'About me', link: 'https://2ssue.github.io/about' },
    ],
    sidebar: [
      ['/', 'Common Questions For Web Developer'],
      {
        title: 'JavaScript',
        path: '/docs/Javascript/',
        children: getFilesOf('docs/Javascript'),
      },
      {
        title: 'Web',
        path: '/docs/Web/',
        children: getFilesOf('docs/Web'),
      },
      {
        title: 'Programming',
        path: '/docs/Programming/',
        children: getFilesOf('docs/Programming'),
      },
      {
        title: 'Framework',
        path: '/docs/Framework/',
        children: getFilesOf('docs/Framework'),
      },
      {
        title: 'CSS',
        path: '/docs/CSS/',
        children: getFilesOf('docs/CSS'),
      },
      {
        title: 'Algorithm',
        path: '/docs/Algorithm/',
        children: getFilesOf('docs/Algorithm'),
      },
    ],
    repo: '2ssue/common_questions_for_Web_Developer',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page🙌!',
  },
};
