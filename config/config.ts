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

  /** header选中状态上划线 */
  #root .__dumi-default-navbar nav > span > a.active::after {
    background: #1677FF;
    bottom: auto;
    top: 0;
  }
  @media only screen and (min-width: 768px) {
    #root .__dumi-default-menu[data-mode='site'] {
      width: 240px;
      padding-top: 32px;
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
  /** 分类标题 */
  #root .__dumi-default-menu-inner > ul > li > a:not([href]) {
    color: #8C8B8C !important;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #EBEDF0;
    margin-bottom: 8px;
    padding-left: 0!important;
    margin-left: 40px;
    margin-right: 24px;
  }
  /** a标签 */
  #root .__dumi-default-menu-inner ul li a,  #root .__dumi-default-menu-inner ul li > span {
    line-height:  38px;
    margin-bottom: 8px;
    color: #000;
    font-size: 14px;
  }
  #root .__dumi-default-previewer-actions {
    height: 0;
    position: relative;
  }
  #root .__dumi-default-icon {
    position: absolute;
    top: 56px;
    right: 24px;
    margin-right: 0;
    z-index: 100;
  }
  #root .__dumi-default-previewer {
    border: none;
    box-shadow: none;
    background: #FAFBFC;
    border-radius: 12px;
    overflow: hidden;
  }
  #root .__dumi-default-table {
    margin-top: 0;
    margin-bottom: 0;
  }
  #root .__dumi-default-table-content {
    border-radius: 12px;
    border: 1px solid #ebedf1;
  }
  /** 当前激活的demo项 */
  #root .__dumi-default-previewer-target {
    background: #697B8C0D;
  }
  /** 选中底部线条 */
  #root .__dumi-default-tabs-ink-bar {
    background: #1677ff;
  }
  #root .__dumi-default-previewer-source-tab {
    border: none;
    background: rgba(0,0,0,.02);
  }
  #root .__dumi-default-tabs-tab {
    color: #314659;
  }
  #root .__dumi-default-tabs-tab-active {
    color: #1677ff;
  }
  #root .__dumi-default-code-block {
    padding: 16px 24px;
    background: none;
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
  #root .__dumi-default-layout[data-site-mode='true'][data-show-sidemenu='true'] {
    padding-left: 280px;
    padding-top: 104px;
  }
  #root .markdown table {
    border-radius: 12px;
    overflow: hidden;
  }
  #root .markdown ul {
    margin: 0;
  }
  #root .markdown li {
    margin-left: 20px;
    padding-left: 4px;
    list-style-type: circle;
  }
  #root .markdown p {
    margin: 0;
    font-size: 14rpx;
    color: #314659;
    line-height: 28px;
  }
  #root .markdown h1 {
    font-size: 30px;
    line-height: 38px;
    color: #0D1A26E6;
    margin-bottom: 16px;
  }
  #root .markdown h2 {
    font-size: 24px;
    line-height: 32px;
    color: #0D1A26E6;
    margin-top: 40px;
    margin-bottom: 16px;
  }
  #root .markdown h2#属性 {
    margin-top: 64px;
  }
  /** h3 */
  #root .markdown h3 {
    font-size: 18px;
    line-height: 32px;
    color: #0D1A26E6;
    padding-left: 24px;
    margin-top: 24px;
    margin-bottom: 16px;
    display: inline-block!important;
  }
  #root .markdown h4 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  /** 代码块边框 */
  #root .__dumi-default-mobile-previewer {
    position: relative;
    padding: 0 24px;
  }
  #root .__dumi-default-mobile-previewer::after {
    pointer-events: none;
    content:'';
    position: absolute;
    left: 0;
    right: 0;
    top: -72px;
    bottom: -24px;
    border: 1px solid #E6E6E6;
    border-radius: 12px;
  }
  #root .__dumi-default-mobile-previewer ~ .__dumi-default-mobile-previewer::after {
    border-top: none;
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
