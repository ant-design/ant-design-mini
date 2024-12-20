//@ts-ignore

Page({
  data: {
    promptsTitle: '我可以帮您：',
    baseList: [
      {
        title: 'Ant Design X 全新升级了什么？'
      },
      {
        title: 'Ant Design X 组件资产内容'
      },
      {
        title: '快速实现安装和引入组件'
      }
    ],
    arrowList: [
      {
        showArrow: true,
        title: '热门话题:',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*wJ5aRpr2q1wAAAAAAAAAAAAADkx8AQ/original',
        content: 'Ant Design X 全新升级',
      },
      {
        showArrow: true,
        title: '组件查询:',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*R9L1RLo4x58AAAAAAAAAAAAADkx8AQ/original',
        content: '欢迎组件'
      },
      {
        showArrow: true,
        title: '新手帮助:',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*7eRqQ4JpdccAAAAAAAAAAAAADkx8AQ/original',
        content: '如何实现快速安装和引入'
      }
    ],
    styleList: [
      {
        title: '我的日程',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*LzX3QIQ3EXMAAAAAAAAAAAAADkx8AQ/original',
        content: '每日日程提醒，不错过每一个日程',
      },
      {
        title: '组件查询',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*2TQ2QaONoRYAAAAAAAAAAAAADkx8AQ/original',
        content: '每日审批提醒，不漏信息'
      },
      {
        title: '会议邀约',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*Fw-tQIDYFvsAAAAAAAAAAAAADkx8AQ/original',
        content: '实时会邀提醒，不错过重要会议'
      },
      {
        title: '更多',
        image: 'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*YDWcQbavX8QAAAAAAAAAAAAADkx8AQ/original',
        content: '点击了解更多技能'
      }
    ],
  },
  onClickPromptsItem(item) {
    my.alert({
      content: `点击了 ${item.title || ''} ${item.content || ''}`,
    });
  },
});
