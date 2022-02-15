Page({
  data: {
    items: [
      {
        type: 'dot',
        intro: 'Dot Badge',
        position: 'top-right',
      },
      {
        type: 'number',
        text: 1,
        position: 'top-right',
        info: 'number',
      },
      {
        type: 'number',
        text: 100,
        position: 'top-right',
        info: 'number > 99',
      },
      {
        type: 'text',
        text: '优惠信息',
        position: 'top-right',
        info: 'text',
      },
      {
        type: 'bubble',
        text: '紧急',
        iconType: 'DownOutline',
        position: 'top-right',
        info: '自定义图标',
      },
    ],
  },
});
