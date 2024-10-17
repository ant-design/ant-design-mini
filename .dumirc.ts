import { defineConfig } from 'dumi';
import { defineThemeConfig } from './.dumi/theme/defineThemeConfig';

export default defineConfig({
  mfsu: false,
  hash: true,
  outputPath: 'docs-dist',
  ssr: false,
  sitemap: { hostname: 'https://mini.ant.design' },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/35bd3910-2382-4f5d-903f-ac4c31b76199.svg',
  ],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
    {
      name: 'google-site-verification',
      content: 'kzh4AXx63f3ZC1w2W_k4DWX4L2p_4hRcP5SsRmmMk8k',
    },
  ],
  headScripts: [
    {
      src: 'https://gw.alipayobjects.com/os/lib/current-device/0.10.2/umd/current-device.min.js',
    },
    {
      src: 'https://v1.cnzz.com/z_stat.php?id=1280900245&web_id=1280900245',
      async: true,
    },
  ],
  links: [
    {
      rel: 'preconnect',
      href: 'https://8V6T3YYVB3-dsn.algolia.net',
    },
  ],
  themeConfig: defineThemeConfig({
    name: 'Ant Design Mini',
    prefersColor: {
      default: 'auto',
      switch: true,
    },
    rtl: false,
    logo: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*xfx9Q4kg62MAAAAAAAAAAAAADtF8AQ/original',
    lastUpdated: true,
    nav: {
      'zh-CN': [
        {
          title: '指南',
          link: '/guide/quick-start',
        },
        {
          title: '组件',
          link: '/components/button',
        },
        {
          title: '资源',
          link: '/resources',
        },
        {
          title: '国内镜像',
          link: 'https://ant-design-mini.antgroup.com',
        },
        {
          title: '发布日志',
          link: 'https://github.com/ant-design/ant-design-mini/releases',
        },
      ],
      'en': [
        {
          title: 'Guide',
          link: '/guide/quick-start-en',
        },
        {
          title: 'Components',
          link: '/components/button-en',
        },
        {
          title: 'Resources',
          link: '/resources-en',
        },
        {
          title: 'Domestic Mirror',
          link: 'https://ant-design-mini.antgroup.com',
        },
        {
          title: 'Releases',
          link: 'https://github.com/ant-design/ant-design-mini/releases',
        },
      ],
    },
    footer: `© 2024 Made with ❤ by
        <a className={styles.copyrightLink} href='https://xtech.antfin.com' target='_blank'>
          XTech
        </a>`,
    github: 'https://github.com/ant-design/ant-design-mini',
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en', switchPrefix: 'EN' },
    ],
    title: 'Ant Design Mini',
    description: {
      'zh-CN': '探索移动端小程序的极致体验',
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '快速上手',
          link: '/guide/quick-start',
        },
        {
          text: '在线体验',
          link: '/components/button',
        },
      ],
    },
    features: {
      'zh-CN': [
        {
          title: '高性能',
          details: '无需配置，即可拥有最佳的包体积大小和极致的性能',
        },
        {
          title: '可定制',
          details: '可以高效地对组件外观进行调整或创造自己的主题',
        },
        {
          title: '原子化',
          details: '每个组件的功能不多也不少，恰好就是你所需',
        },
        {
          title: '流畅感',
          details: '拥有流畅的手势和细腻的动画，助力产品打造出极致体验',
        },
      ],
    },
    loading: {
      skeleton: ['/guide', '/components', '/guide', '/components'],
    },
    docVersions: {
      'v2': '',
      'v1': 'https://1x-mini.ant.design',
      'v0': 'https://0x-mini.ant.design',
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Charts',
            url: 'https://charts.ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Pro',
            url: 'https://pro.ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Pro Components',
            url: 'https://procomponents.ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Mobile',
            url: 'https://mobile.ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Landing',
            description: '首页模板集',
            url: 'https://landing.ant.design',
            openExternal: true,
          },
          {
            title: 'Scaffolds',
            description: '脚手架市场',
            url: 'https://scaffold.ant.design',
            openExternal: true,
          },
          {
            title: 'Umi',
            description: 'react 应用开发框架',
            url: 'https://umijs.org',
            openExternal: true,
          },
          {
            title: 'Dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true,
          },
          {
            title: 'qiankun',
            description: '微前端框架',
            url: 'https://qiankun.umijs.org',
            openExternal: true,
          },
          {
            title: 'ahooks',
            description: 'React Hooks 库',
            url: 'https://github.com/alibaba/hooks',
            openExternal: true,
          },
          {
            title: 'Ant Motion',
            description: '设计动效',
            url: 'https://motion.ant.design',
            openExternal: true,
          },
        ],
      },
      {
        title: '社区',
        items: [
          {
            title: 'Awesome Ant Design',
            url: 'https://github.com/websemantics/awesome-ant-design',
            openExternal: true,
          },
          {
            title: 'Medium',
            url: 'http://medium.com/ant-design/',
            openExternal: true,
          },
          {
            title: 'Twitter',
            url: 'http://twitter.com/antdesignui',
            openExternal: true,
          },
          {
            title: '体验科技专栏',
            url: 'http://zhuanlan.zhihu.com/xtech',
            openExternal: true,
          },
        ],
      },
      {
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/ant-design/ant-design-mini',
            openExternal: true,
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
            title: '报告 Bug',
            url: 'https://github.com/ant-design/ant-design-mini/issues',
            openExternal: true,
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png',
            title: '讨论列表',
            url: 'https://github.com/ant-design/ant-design-mini/issues',
            openExternal: true,
          },
        ],
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            url: 'https://yuque.com',
            description: '构建你的数字花园',
            openExternal: true,
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
            title: 'AntV',
            url: 'https://antv.vision',
            description: '数据可视化解决方案',
            openExternal: true,
          },
          {
            icon: 'https://www.eggjs.org/logo.svg',
            title: 'Egg',
            url: 'https://eggjs.org',
            description: '企业级 Node.js 框架',
            openExternal: true,
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico',
            title: 'Kitchen',
            description: 'Sketch 工具集',
            url: 'https://kitchen.alipay.com',
            openExternal: true,
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: '蚂蚁体验科技',
            url: 'https://xtech.antfin.com/',
            openExternal: true,
          },
        ],
      },
    ],
  }),
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en', name: 'English', suffix: '-en' },
  ],
});
