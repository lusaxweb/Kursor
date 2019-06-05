module.exports = {
  base: '/Kursor/',
  ga:'UA-122319353-1',
  docsDir: 'docs',
  title: 'Kursor.js - library for javascript',
  description: 'Cursor style with javascript and css',
  plugins: [
    [
      'vuepress-plugin-smooth-scroll',
    ],
    ['container', {
      type: 'tip',
      defaultTitle: '',
    }],
    ['container', {
      type: 'warning',
      defaultTitle: '',
    }],
    ['container', {
      type: 'danger',
      defaultTitle: '',
    }]
],
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'lusaxweb/kursor',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'lusaxweb/kursor',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/guide/': [
        '',     /* /guide/ */
        'installation',
        'getting-started',
        'configuration',
        'types',
      ],
    }
  }
}
