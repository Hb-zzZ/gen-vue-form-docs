module.exports = {
  '/views/guide/': [
    {
      title: '指南',
      collapsable: false,
      children: ['', 'getting-started']
    },
    {
      title: '表单form',
      collapsable: false,
      children: ['form-props', 'form-methods', 'form-rules']
    },
    {
      title: 'formDesc',
      collapsable: false,
      children: ['formDesc', 'formDesc-type', 'formDesc-linkages']
    },
    {
      title: '全局配置',
      collapsable: false,
      path: 'global-config'
    },
    {
      title: '多层级model',
      collapsable: false,
      path: 'deep-model'
    }
  ]
}
