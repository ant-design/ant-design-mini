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
          link: '/components/overview',
        },
        {
          title: 'Copilot',
          link: '/copilots/bubble',
          // @ts-ignore
          isNew: true,
          rightIcon:
            'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*iiKoT73_9ucAAAAAAAAAAAAAetF8AQ/original',
        },
        {
          title: 'FormRenderMini',
          link: '/form/introduction',
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
          link: '/components/overview-en',
        },
        {
          title: 'Copilot',
          link: '/copilots/bubble-en',
          // @ts-ignore
          isNew: true,
          rightIcon:
            'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*iiKoT73_9ucAAAAAAAAAAAAAetF8AQ/original',
        },
        {
          title: 'ForMRenderMini',
          link: '/form/introduction-en',
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
    footer: `© ${new Date().getFullYear()} Made with ❤ by
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
      'en': 'Explore the ultimate experience of mobile applets',
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
          link: '/components/overview',
        },
      ],
      'en': [
        {
          type: 'primary',
          text: 'Get started quickly',
          link: '/guide/quick-start-en',
        },
        {
          text: 'Online Experience',
          link: '/components/overview-en',
        },
      ],
    },
    features: {},
    loading: {
      skeleton: ['/guide', '/components', '/guide', '/components'],
    },
    docVersions: {
      'v3': '',
      'v2': 'https://2x-mini.ant.design',
    },
    footerLinks: {
      'zh-CN': [
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
      'en': [
        {
          title: 'Related resources',
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
              description: 'Home page template set',
              url: 'https://landing.ant.design',
              openExternal: true,
            },
            {
              title: 'Scaffolds',
              description: 'scaffolding market',
              url: 'https://scaffold.ant.design',
              openExternal: true,
            },
            {
              title: 'Umi',
              description: 'react development framework',
              url: 'https://umijs.org',
              openExternal: true,
            },
            {
              title: 'Dumi',
              description: 'component/doc development toolkit',
              url: 'https://d.umijs.org',
              openExternal: true,
            },
            {
              title: 'qiankun',
              description: 'Micro front-end framework',
              url: 'https://qiankun.umijs.org',
              openExternal: true,
            },
            {
              title: 'ahooks',
              description: 'React Hooks Library',
              url: 'https://github.com/alibaba/hooks',
              openExternal: true,
            },
            {
              title: 'Ant Motion',
              description: 'Design animation',
              url: 'https://motion.ant.design',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Community',
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
              title: 'Experience Technology Column',
              url: 'http://zhuanlan.zhihu.com/xtech',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
              title: 'GitHub',
              url: 'https://github.com/ant-design/ant-design-mini',
              openExternal: true,
            },
            {
              icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
              title: 'Report Bug',
              url: 'https://github.com/ant-design/ant-design-mini/issues',
              openExternal: true,
            },
            {
              icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png',
              title: 'Discussion List',
              url: 'https://github.com/ant-design/ant-design-mini/issues',
              openExternal: true,
            },
          ],
        },
        {
          title: 'More Production',
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
          items: [
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
              title: 'Yuque',
              url: 'https://yuque.com',
              description: 'Build your digital garden',
              openExternal: true,
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
              title: 'AntV',
              url: 'https://antv.vision',
              description: 'Data visualization solutions',
              openExternal: true,
            },
            {
              icon: 'https://www.eggjs.org/logo.svg',
              title: 'Egg',
              url: 'https://eggjs.org',
              description: 'Enterprise-grade Node.js framework',
              openExternal: true,
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico',
              title: 'Kitchen',
              description: 'Sketch Toolkit',
              url: 'https://kitchen.alipay.com',
              openExternal: true,
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
              title: 'Ant Experience Technology',
              url: 'https://xtech.antfin.com/',
              openExternal: true,
            },
          ],
        },
      ],
    },
    // Header 配置
    headerLocales: {
      'zh-CN': {
        key: 'zh-CN',
        theme: '切换主题',
      },
      'en': {
        key: 'en',
        theme: 'Theme Switch',
      },
    },
    // Banner 配置
    bannerLocales: {
      'zh-CN': {
        key: 'zh-CN',
        desc: '# 探索移动端小程序的极致体验',
        integration: '快速接入',
        try: '在线体验',
      },
      'en': {
        key: 'en',
        desc: '# Explore the Ultimate Experience of Mobile Mini Programs',
        integration: 'Quick Start',
        try: 'Try It Online',
      },
    },
    // 相关框架
    frameLocales: {
      'zh-CN': {
        key: 'zh-CN',
        title: '设计语言与研发框架',
        subTitle: '配套生态，让你快速搭建小程序应用',
      },
      'en': {
        key: 'en',
        title: 'Design Language and Development Framework',
        subTitle: 'Comprehensive Ecosystem for Rapid Application Development',
      },
    },
    // 组件模块
    galleryLocales: {
      'zh-CN': {
        key: 'zh-CN',
        title: '组件丰富，选用自如',
        subTitle: '大量实用组件满足你的需求，灵活定制与拓展',
      },
      'en': {
        key: 'en',
        title: 'Rich Component Library, Easy to Choose and Use',
        subTitle:
          'A Wide Range of Practical Components to Meet Your Needs, with Flexible Customization and Expansion',
      },
    },
    // 公告
    noticeLocales: {
      'zh-CN': {
        key: 'zh-CN',
      },
      'en': {
        key: 'en',
      },
    },
    // 主题
    themeLocales: {
      'zh-CN': {
        key: 'zh-CN',
        title: '定制主题，国际语言',
        subTitle: 'Ant Design Mini 开放更多主题样式，国际语言随意切换组件文案',
        dark: '暗黑模式',
        light: '明亮模式',
        langDesc: '简体中文',
      },
      'en': {
        key: 'en',
        title: 'Customizable Themes, International Languages',
        subTitle:
          'Ant Design Mini Offers More Theme Styles and Seamless Switching of Component Text in Multiple Languages',
        dark: 'Dark Mode',
        light: 'Light Mode',
        langDesc: 'English',
      },
    },
    // 谁在使用
    userLocales: {
      'zh-CN': {
        key: 'zh-CN',
        title: 'Ant Design Mini 正在为 100+ 客户带来效能提升',
      },
      'en': {
        key: 'en',
        title:
          'Ant Design Mini is Bringing Efficiency Gains to Over 100 Customers',
      },
    },
  }),
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en', name: 'English', suffix: '-en' },
  ],
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src',
      },
      {
        type: 'copilot',
        dir: 'copilot',
      },
    ],
  },
});
