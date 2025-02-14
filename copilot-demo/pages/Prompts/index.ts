Page({
  data: {
    promptsTitle: '我可以帮您：',
    baseList: [
      {
        label: 'Ant Design X 全新升级了什么？',
        key: '1',
      },
      {
        label: 'Ant Design X 组件资产内容',
        key: '2',
      },
      {
        label: '快速实现安装和引入组件',
        key: '3',
      },
    ],
    arrowList: [
      {
        showArrow: true,
        label: '热门话题:',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*wJ5aRpr2q1wAAAAAAAAAAAAADkx8AQ/original',
        description: 'Ant Design X 全新升级',
        key: '1',
      },
      {
        showArrow: true,
        label: '组件查询:',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*R9L1RLo4x58AAAAAAAAAAAAADkx8AQ/original',
        description: '欢迎组件',
        key: '2',
      },
      {
        showArrow: true,
        label: '新手帮助:',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*7eRqQ4JpdccAAAAAAAAAAAAADkx8AQ/original',
        description: '如何实现快速安装和引入',
        key: '3',
      },
      {
        showArrow: true,
        label: '禁用:',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*7eRqQ4JpdccAAAAAAAAAAAAADkx8AQ/original',
        description: '如何实现快速安装和引入',
        key: '4',
        disabled: true,
      },
    ],
    styleList: [
      {
        label: '我的日程',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*LzX3QIQ3EXMAAAAAAAAAAAAADkx8AQ/original',
        description: '每日日程提醒，不错过每一个日程',
        key: '1',
      },
      {
        label: '组件查询',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*2TQ2QaONoRYAAAAAAAAAAAAADkx8AQ/original',
        description: '每日审批提醒，不漏信息',
        key: '2',
      },
      {
        label: '会议邀约',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*Fw-tQIDYFvsAAAAAAAAAAAAADkx8AQ/original',
        description: '实时会邀提醒，不错过重要会议',
        key: '3',
      },
      {
        label: '更多',
        icon: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*YDWcQbavX8QAAAAAAAAAAAAADkx8AQ/original',
        description: '点击了解更多技能',
        key: '4',
      },
    ],
    horizontalList: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*AdC9RZfDwicAAAAAAAAAAAAADtF8AQ/original',
        label: '我的日程',
        value: 'schedule',
        key: '1',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*Mbi1R5eGTecAAAAAAAAAAAAADtF8AQ/original',
        label: '快捷功能',
        value: 'suggestion',
        key: '2',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*WqBJSZEpPbwAAAAAAAAAAAAADtF8AQ/original',
        label: '诊断分析',
        value: 'analyze',
        key: '3',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*WqBJSZEpPbwAAAAAAAAAAAAADtF8AQ/original',
        label: '禁用',
        value: 'analyze',
        key: '4',
        disabled: true,
      },
      {
        // 支持 antd-icon
        icon: 'MoreOutline',
        label: '更多',
        value: 'more',
        key: '5',
      },
    ],
  },
  onItemTap(i) {
    let item = i;
    /// #if ALIPAY
    console.log(item);
    my.showToast({ content: item.key });
    /// #endif
    /// #if WECHAT
    item = i.detail[0];
    console.log(item);
    // @ts-ignore
    wx.showToast({ title: item.key });
    /// #endif
  },
});
