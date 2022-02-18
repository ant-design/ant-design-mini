export default {
  title: 'Ant Design Mini',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/35bd3910-2382-4f5d-903f-ac4c31b76199.svg',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/35bd3910-2382-4f5d-903f-ac4c31b76199.svg',
  outputPath: 'docs-dist',
  locales: [['zh', '中文']],
  mode: 'site',
  hash: true,
  plugins: ['./plugin/index.ts'],
  headScripts: [{ src: 'https://gw.alipayobjects.com/os/lib/ali/mini-simulator/9.1.5/dist/index.js' }],
  navs: {
    zh: [
      {
        title: '指南',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: '仓库地址',
        path: 'https://github.com/ant-design/ant-design-mini',
      }],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '快速开始',
        path: '/guide/quick-start',
      },
      {
        title: '项目共建',
        path: '/guide/cooperation',
      },
      {
        title: '贡献指南',
        path: '/guide/contribute',
      },
      {
        title: '常见问题',
        path: '/guide/faq',
      },
    ],
  },
};
