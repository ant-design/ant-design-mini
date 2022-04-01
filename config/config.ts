export default {
  title: 'Ant Design Mini',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/35bd3910-2382-4f5d-903f-ac4c31b76199.svg',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d1971355-ffff-44ef-9e20-1bc9a237d463.svg',
  outputPath: 'docs-dist',
  locales: [['zh', '中文']],
  mode: 'site',
  hash: true,
  plugins: ['./plugin/index.ts', './docs/mobile/index.ts'],
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  headScripts: [
    { src: 'https://unpkg.com/current-device/umd/current-device.min.js' },
    { src: 'https://gw.alipayobjects.com/os/lib/ali/mini-simulator/9.1.5/dist/index.js' },
    { src: 'https://v1.cnzz.com/z_stat.php?id=1280900245&web_id=1280900245' }
  ],
  scripts: [
    `
    var a = document.querySelector(".__dumi-default-navbar-logo")
    a.innerHTML = '';
    if(device.mobile() && !window.location.pathname.startsWith('/mobile')){
      window.location.href="/mobile"
    }
    `,
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WWGN4HC');
    `
  ],
  styles: [`
  html {
    touch-action: manipulation;
  }
  #root .__dumi-default-navbar {
    padding-left: 32px;
  }
  #root .__dumi-default-navbar-logo{
    padding-left: 200px;
    text-indent: -10000px;
  }
  #root .__dumi-default-navbar{
    box-shadow: none;
    border-bottom: 1px solid #ebedf1;
  }
  a[title='站长统计']  {
    display: none;
  }
  #root .__dumi-default-device[data-device-type="iOS"] {
    display: none;
  }
  #root .__dumi-default-menu-inner ul li ul {
    padding-left: 0;
  }
  /** 侧边栏选中状态 */
  #root .__dumi-default-menu-inner > ul ul a.active{
    background-color: #EDF3FF;
    color: #1677ff;
  }
  /** 侧边栏悬停状态 */
  #root .__dumi-default-menu-inner > ul ul a:hover {
    color: #1677ff;
  }
  #root .__dumi-default-menu-inner ul li.active a::before,  #root  .__dumi-default-menu-inner ul li a.active::before{
    display: none;
  }
  /** 左侧选中状态竖线 */
  #root .__dumi-default-menu-inner ul li.active a::after,  #root  .__dumi-default-menu-inner ul li a.active::after{
    position: absolute;
    content:'';
    right: 1px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #1677FF;
  }
  /** 左侧导航选中状态 */

  /** header选中状态上划线 */
  #root .__dumi-default-navbar nav > span > a.active::after {
    background: #1677FF;
    bottom: auto;
    top: 0;
  }
  @media only screen and (min-width: 768px) {
    #root .__dumi-default-menu[data-mode='site'] {
      width: 240px;
      padding-top: 24px;
    }
    #root .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a ~ ul {
      margin-left: 0;
    }
    #root .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a {
      padding-left: 40px;
    }
    #root .__dumi-default-menu-inner > ul ul a {
      padding-left: 40px;
    }
  }
  /** 标题 */
  #root .__dumi-default-menu-inner > ul > li > a:not([href]) {
    color: #8C8B8C !important;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #D8D8D8;
    margin-bottom: 8px;
    padding-left: 0!important;
    margin-left: 40px;
    margin-right: 24px;
  }
  /** a标签 */
  #root .__dumi-default-menu-inner ul li a,  #root .__dumi-default-menu-inner ul li > span {
    line-height:  38px;
    color: #000;
    font-size: 14px;
  }
  #root .__dumi-default-previewer-actions {
    height: 0;
    position: relative;
  }
  #root .__dumi-default-icon {
    position: absolute;
    top: 40px;
    right: 24px;
    margin-right: 0;
    z-index: 100;
  }
  #root .__dumi-default-previewer {
    border: none;
  }
  #root .__dumi-default-previewer-source-wrapper {
    border-radius: 12px;
    overflow: hidden;
  }
  /** 当前激活的demo项 */
  #root .__dumi-default-previewer-target {
    border: 1px solid #1677ff;
  }
  /** 当组件只有一个demo时使用js控制，添加onlyOnePreviewer的class去除选中效果 */
  #root .__dumi-default-mobile-previewer.onlyOnePreviewer  .__dumi-default-previewer-target {
    border: none;
  } 
  /** 选中底部线条 */
  #root .__dumi-default-tabs-ink-bar {
    background: #1677ff;
  }
  #root .__dumi-default-previewer-source-tab {
    border: none;
    background: rgba(0,0,0,.02);
  }
  #root .__dumi-default-tabs-tab-active {
    color: #1677ff;
  }
  #root .__dumi-default-code-block {
    padding: 16px 24px;
  }
  #root .__dumi-default-code-block pre[class*="language-"] {
    padding: 0;
  }
  /** 底部github编辑、最后更新时间 */
  #root .__dumi-default-layout-footer-meta > a, #root .__dumi-default-layout-footer-meta > span:last-child::before {
    color: #1677ff;
  }
  /** 左侧标题描述 */
  #root .__dumi-default-menu-inner > ul ul a>span>span {
    display: inline;
    padding-left: 8px;
    color: rgba(0,0,0,.45);
  }
  /** 描述选中态 */
  #root .__dumi-default-menu-inner > ul ul a.active>span>span,  #root .__dumi-default-menu-inner > ul ul a:hover>span>span {
    color: #1677ff73;
  }
  `],
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
