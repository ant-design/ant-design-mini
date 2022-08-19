export const productIntroduce = [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/c4cbdbb0-fcca-49e9-8771-861a77ede237.svg',
    title: '高性能',
    description: '无需配置，即可拥有最佳的包体积大小和极致的性能'
  }, {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/6c6c89c8-d6dd-407b-8d80-1e1785113716.svg',
    title: '可定制',
    description: '可以高效地对组件外观进行调整或创造自己的主题'
  }, {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/a1034495-3689-4b69-a4f1-cc432eeeee34.svg',
    title: '原子化',
    description: '每个组件的功能不多也不少，恰好就是你所需'
  }, {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/423cc9c3-c3ab-416c-a5db-eee37d9a9fa0.svg',
    title: '流畅感',
    description: '拥有流畅的手势和细腻的动画，助力产品打造出极致体验'
  }
];

export const getProductResource = (isWideScreen) => [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/8ee0cfed-e5f1-4c2d-9648-9931aa98851e.svg',
    title: '在线体验',
    description: '你可以直接在 Codesandbox 上在线体验，无需安装和配置环境',
    backgroundImage: isWideScreen ? 'https://gw.alipayobjects.com/zos/bmw-prod/239bb8cf-3fcd-4cfe-bb5a-ba2d910342bc.svg' : 'https://gw.alipayobjects.com/zos/bmw-prod/613c0844-d32d-4b89-83f2-36bc6840628a.svg',
    buttonText: '开始体验',
    buttonLink: '',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/06ae4a67-b93a-413b-9c58-75dbbe79f5b7.svg',
    title: '组件列表',
    description: '基于蚂蚁集团的众多业务实践，抽象构建出移动端资产库',
    backgroundImage: isWideScreen ? 'https://gw.alipayobjects.com/zos/bmw-prod/adc38047-867d-4924-be79-dddc481e4650.svg' : 'https://gw.alipayobjects.com/zos/bmw-prod/3479a5ca-2abf-4eb3-bb64-01eadcfcfa64.svg',
    buttonText: '查看全部',
    buttonLink: '',
  },
];

export const productDesignValues = [
  {
    title: '设计价值观',
    description: '这是 Ant Design 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们在「确定性」和「自然」的基础上，新增「意义感」和「生长性」两个价值观，指引每个设计者做更好地判断和决策。',
    icons: [
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/aba20fd6-069b-41c3-a3b3-d56c73a1d9bd.json',
        text: '确定性',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/5aa98c18-fe89-4e8b-88cd-bb39fe54a46f.json',
        text: '意义感',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/df6d2e26-cdd1-4cc5-8c81-e50327f192af.json',
        text: '生长性',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/28ea4981-a80e-4338-93b2-6b47e53c3b84.json',
        text: '自然',
      }
    ]
  }
];

export const getProductDesignValuesBackgroundImage = (isWideScreen) =>
  isWideScreen
    ? 'https://gw.alipayobjects.com/zos/bmw-prod/8e1607a9-2a82-47b8-901a-3310c84727c8.svg'
    : 'https://gw.alipayobjects.com/zos/bmw-prod/f17ac910-049a-4506-9498-723dec7d0d7a.svg';


export const getGuides = (isWideScreen) => [
  {
    title: '快速上手',
    description: '轻松两步，快速实现安装和引入组件，antd-mobile 自动为你加载 css 样式文件。',
    backgroundImage: isWideScreen ? 'https://gw.alipayobjects.com/zos/bmw-prod/2ca16dac-4e7c-4bf4-8980-a5a04002afb4.svg' : 'https://gw.alipayobjects.com/zos/bmw-prod/64172109-6ad4-4628-b3c9-24fd410329da.svg',
    buttonText: '查看详情',
    buttonLink: '',
  },
  {
    title: '常见问题',
    description: '我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下。',
    backgroundImage: isWideScreen ? 'https://gw.alipayobjects.com/zos/bmw-prod/a57dedec-63df-49a2-aa61-1bdb38694f24.svg' : 'https://gw.alipayobjects.com/zos/bmw-prod/a56a3cf4-d84d-49f3-952c-b9cd1197f7b3.svg',
    buttonText: 'FAQ',
    buttonLink: '',
  }
];

export const recommends = [
  {
    title: 'Ant Design',
    description: '企业级产品设计体系，创造高效愉悦的工作体验',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/1c33ec37-9291-485f-81c6-a9cbd57c08f9.svg',
    link: 'https://ant.design'
  },
  {
    title: 'Ant Design Pro',
    description: '开箱即用的中台前端/设计解决方案',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/1c33ec37-9291-485f-81c6-a9cbd57c08f9.svg',
    link: 'https://pro.ant.design'
  },
  {
    title: 'AntV',
    description: '蚂蚁集团全新一代数据可视化解决方案',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/42c6e259-a343-4fb7-8fff-2058dd835f43.svg',
    link: 'https://antv.vision'
  }
];

export const users = [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/db2cc1f4-7c9a-4412-9117-0fe487272208.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/31acafc2-d143-4849-a3ae-87417d788890.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/9991fbe9-d6bf-405d-9584-55f337396e18.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/40b66fe4-effc-41c3-8c8b-a1815ba6bd40.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/95224581-ffe0-44b5-ad70-d4c44ff14d0f.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/c8eac91e-b243-409e-8d30-3edcde6236c9.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/57e7b248-778c-490c-9683-d119ec198886.svg',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/6356b1fc-53b7-4c79-b97d-3c42e358d106.svg',
  }
];