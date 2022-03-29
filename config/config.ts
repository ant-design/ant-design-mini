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
  #root .__dumi-default-menu-inner > ul ul a.active {
    background-color: #EDF3FF;
    color: #1677ff;
  }
  #root .__dumi-default-menu-inner ul li.active a::before,  #root  .__dumi-default-menu-inner ul li a.active::before{
    display: none;
  }
  #root .__dumi-default-menu-inner ul li.active a::after,  #root  .__dumi-default-menu-inner ul li a.active::after{
    position: absolute;
    content:'';
    right: 1px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #1677FF;
  }
  #root .__dumi-default-navbar nav > span > a:hover,#root  .__dumi-default-navbar nav > span > a.active {
    color: #1677ff;
  }
  #root .__dumi-default-navbar nav > span > a.active::after {
    background: #1677FF;
  }
  @media only screen and (min-width: 768px) {
    #root .__dumi-default-menu[data-mode='site'] {
      width: 240px;
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
  @media only screen and (min-width: 768px)
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
