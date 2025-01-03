Page({
  data: {
    items1: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*AdC9RZfDwicAAAAAAAAAAAAADtF8AQ/original',
        label: '我的日程',
        value: 'schedule',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*Mbi1R5eGTecAAAAAAAAAAAAADtF8AQ/original',
        label: '快捷功能',
        value: 'suggestion',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*WqBJSZEpPbwAAAAAAAAAAAAADtF8AQ/original',
        label: '诊断分析',
        value: 'analyze',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*fVpIQZbRi4IAAAAAAAAAAAAADtF8AQ/original',
        label: '更多',
        value: 'more',
      },
    ],
    items2: [
      {
        icon: 'UserOutline',
        label: '我的日程',
        value: 'schedule',
      },
      {
        icon: 'UnorderedListOutline',
        label: '快捷功能',
        value: 'suggestion',
      },
      {
        icon: 'HistogramOutline',
        label: '诊断分析',
        value: 'analyze',
      },
      {
        icon: 'MoreOutline',
        label: '更多',
        value: 'SendOutline',
      },
    ],
  },
  handleSelect(item) {
    /// #if ALIPAY
    console.log(item);
    my.showToast({ content: item.value });
    /// #endif
  },
});
