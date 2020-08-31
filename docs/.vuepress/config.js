const themeConfig = require('./config/')

module.exports = {
  theme: 'reco',
  //   title: 'gen-vue-form',
  base: '/',
  dest: './pages',
  description: 'gen-vue-form 文档，方便你更快入手！',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  themeConfig,
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-imsize'))

      md.use(require('markdown-it-image-loading'), {
        loadingSrc: '/loading.svg',
        loadingWidth: 120,
        loadingHeight: 120,
        minWidth: 10,
        minHeight: 10
      })
    }
  }
}
