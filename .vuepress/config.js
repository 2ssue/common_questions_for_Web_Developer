module.exports = {
  base: '/common_questions_for_Web_Developer/',
  assetsPublicPath: '/',
  title: "2ssue's dev note",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://2ssue.github.io' },
      { text: 'About me', link: 'https://2ssue.github.io/about' },
    ],
    sidebar: [
      ['/', 'Common Questions For Web Developer'],
      '/docs/Algorithm/',
      '/docs/Framework/',
      '/docs/Javascript/',
      '/docs/Programming/',
      '/docs/Web/',
    ],
    repo: '2ssue/common_questions_for_Web_Developer',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page🙌!',
  },
};
