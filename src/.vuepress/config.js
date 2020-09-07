const themeConfig = require('./config/')

const base = '/gen-vue-form-docs/'

module.exports = {
  theme: 'reco',
  title: 'gen-vue-form',
  base: base,
  dest: './docs',
  description: 'gen-vue-form 文档，方便你更快入手！',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['meta', { name: 'author', content: 'Hb-zzZ' }],
    ['meta', { name: 'keywords', content: 'gen-vue-form文档' }]
  ],
  themeConfig,
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-imsize'))

      md.use(require('markdown-it-image-loading'), {
        loadingSrc: `${base}loading.svg`,
        loadingWidth: 50,
        loadingHeight: 50,
        minWidth: 50,
        minHeight: 50
      })
    }
  }
}
