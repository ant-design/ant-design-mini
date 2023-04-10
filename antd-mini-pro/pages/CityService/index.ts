Page({
  data: {
    header: {
      placeholder: '城市服务',
      backgroundImage:
        'https://gw.alipayobjects.com/mdn/rms_41a95e/afts/img/A*PKkfR6_pDlEAAAAAAAAAAAAAARQnAQ/os.webp',
      cityInfo: {
        cityName: '上海',
        cityCode: '310100',
      },
    },
    functions: {
      columns: 5,
      list: [
        {
          title: '全国通办',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*ymzcQ4X-GpcAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '生活缴费',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*Ptb6TqxoUFoAAAAAAAAAAAAAARQnAQ',
          badge: {
            stroke: true,
            text: '绿色能量',
            bgColor: '#1FA026',
            type: 'bubble',
            offsetX: '-20px',
            offsetY: '-5px',
          },
        },
        {
          title: '手机充值',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*J0lDQb9_sSQAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '公积金',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*FkpmSKnSOFAAAAAAAAAAAAAAARQnAQ',
          badge: {
            stroke: true,
            text: '绿色能量',
            bgColor: '#1FA026',
            type: 'bubble',
            offsetX: '-20px',
            offsetY: '-5px',
          },
        },
        {
          title: '社保',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*IEQhQpDK80cAAAAAAAAAAAAAARQnAQ',
          badge: {
            stroke: true,
            text: '绿色能量',
            bgColor: '#1FA026',
            type: 'bubble',
            offsetX: '-20px',
            offsetY: '-5px',
          },
        },
        {
          title: '医保',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*UyXVQZQeIsUAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '公安',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/IXNQdkVsmevuSlCOXtza.png',
        },
        {
          title: '支付宝就业',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/aNAQlVVtyTQCWsOGXAaD.png',
          badge: {
            stroke: true,
            text: 'new',
            type: 'bubble',
            offsetY: '-5px',
          },
        },
        {
          title: '医疗健康',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/CgLPtNVePzSrqGjegYgk.png',
        },
        {
          title: '交管',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/CUSBSbKDmtAXfDYbSpKw.png',
        },
        {
          title: '出入境',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/vKCsXxqRzeYfWfUGakPU.png',
        },
        {
          title: '环保公益',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*Z7IiSaxjbHgAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '交通出行',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/XMETGfBsBJIBTlAQWdYi.png',
        },
        {
          title: '政务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*0n9RRaudfd8AAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '宠物服务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*SyoTQ4EjMwgAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '教育服务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*LCG_QrVf7GUAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '文体',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/SjrpyvbLRmUFrGfyMxty.png',
          badge: {
            type: 'dot',
          },
        },
        {
          title: '税务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*TWpyRKedCywAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '民政',
          icon: 'https://gw.alipayobjects.com/zos/csbizcenter/HmcwfQQIXePsOBAHUilX.png',
        },
        {
          title: '企业服务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*y7WUTqbZdPYAAAAAAAAAAAAAARQnAQ',
        },
        {
          title: '更多服务',
          icon: 'https://gw.alipayobjects.com/mdn/rms_1d99c4/afts/img/A*mvcFTb9JPIkAAAAAAAAAAAAAARQnAQ',
        },
      ],
    },
  },
  handleChangeCity(info) {
    this.setData({
      header: {
        ...this.data.header,
        cityInfo: info,
      },
    });
  },
});
