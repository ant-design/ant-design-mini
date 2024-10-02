import { defineConfig } from 'dumi';
import { defineThemeConfig } from './.dumi/theme/defineThemeConfig';

export default defineConfig({
  mfsu: false,
  hash: true,
  outputPath: 'docs-dist',
  ssr: process.env.NODE_ENV === 'development' ? false : {},
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
    rtl: false,
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d1971355-ffff-44ef-9e20-1bc9a237d463.svg',
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
    },
    footer:
      'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>Rayhomie | Copyright © 2024-present</span>',
    github: 'https://github.com/ant-design/ant-design-mini',
    localesEnhance: [{ id: 'zh-CN', switchPrefix: '中' }],
    title: 'Ant Design Mini',
    description: {
      'zh-CN': 'Ant Design 5.0 官网风格类似的 dumi2 主题插件',
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide/introduce',
        },
        {
          text: '配置',
          link: '/config/base',
        },
      ],
    },
    features: {
      'zh-CN': [
        {
          title: '内置全文搜索',
          details:
            '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。',
        },
        {
          title: '更好的编译性能',
          details:
            '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。',
        },
        {
          title: 'SSR',
          details:
            '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。',
        },
        {
          title: '样式风格统一',
          details:
            '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。',
        },
        {
          title: '功能增强',
          details:
            '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。',
        },
        {
          title: '开箱即用',
          details:
            '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。',
        },
      ],
    },
    loading: {
      skeleton: ['/guide', '/components'],
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
            title: 'dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true,
          },
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true,
          },
          {
            title: 'Umi',
            description: 'React 应用开发框架',
            url: 'https://umijs.org',
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
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/KuangPF/dumi-theme-antd',
            openExternal: true,
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181710-8e63ee99-ed71-4ee6-8507-d5ffac02ca51.png',
            title: '更新日志',
            url: '/dumi-theme-antd/guide/changelog',
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181704-d443821a-38a2-490a-9aba-4955ceb8d89b.png',
            title: '常见问题',
            url: '/dumi-theme-antd/config/faq',
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
            title: '报告 Bug',
            url: 'https://github.com/KuangPF/dumi-theme-antd/issues/new',
            openExternal: true,
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png',
            title: '议题',
            url: 'https://github.com/KuangPF/dumi-theme-antd/issues',
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
});
