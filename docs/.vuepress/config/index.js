const sidebar = require('./sidebar/')
const nav = require('./nav/')

module.exports = Object.assign(
  {},
  {
    sidebar,
    nav
  },
  {
    // 关闭404公益页面
    logo: '/logo.jpg',
    noFoundPageByTencent: false,
    startYear: '2020',
    author: 'Hb_zzZ',
    lastUpdated: '最后更新',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 备案号
    // record: 'xxxx',
    codeTheme: 'tomorrow',
    type: 'HomePage'
  }
)
