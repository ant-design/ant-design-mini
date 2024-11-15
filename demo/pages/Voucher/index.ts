Page({
  data: {
    dataSource: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '50',
        threshold: '满500可用',
        actionAreaInfo: {
          disabled: false,
          text: '去兑换',
        },
      },
    ],

    dataSource1: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '50.5',
        threshold: '满500可用',
        actionAreaInfo: {
          disabled: true,
          text: '去兑换',
        },
      },
    ],

    dataSource2: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '150.55',
        threshold: '满500可用',
        actionAreaInfo: {
          imageUrl:
            'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*6ru_T531wmgAAAAAAAAAAAAADtF8AQ/original',
        },
      },
    ],

    dataSource2A: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '8.8',
        moneyUnit: '折',
        threshold: '满500可用',
        actionAreaInfo: {
          imageUrl:
            'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*6ru_T531wmgAAAAAAAAAAAAADtF8AQ/original',
        },
      },
    ],

    dataSource3: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '50.5',
        threshold: '满500可用',
        actionAreaInfo: {
          disabled: false,
          text: '去使用',
        },
      },
    ],

    dataSource4: [
      {
        disabled: true,
        title: '主标题文案主标题文案',
        desc: '有效期：2023.12.18',
        money: '50.99',
        threshold: '满50可用',
      },
    ],

    // 多列
    dataSource5: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '0.5',
      },
    ],
    dataSource6: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '150.55',
      },
    ],
    dataSource7: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '2.88',
        moneyUnit: '折',
      },
    ],
  },

  onTap(item, event) {
    my.alert({
      content: `onTap item: ${JSON.stringify(item)} \n event: ${JSON.stringify(
        event,
      )}`,
    });
  },

  onVoucherTap(item, event) {
    my.alert({
      content: `onVoucherTap item: ${JSON.stringify(item)} \n event: ${JSON.stringify(
        event,
      )}`,
    });
  },
});
