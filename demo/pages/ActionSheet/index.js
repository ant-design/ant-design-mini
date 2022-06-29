Page({
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    actions1: [
      {
        text: '复制',
        key: 'copy',
      },
      {
        text: '修改',
        key: 'modify',
      }
    ],
    actions2: [
      {
        text: '复制',
        key: 'copy',
        description: "请选择复制内容"
      },
      {
        text: '修改',
        key: 'modify',
        disabled: true
      },
      {
        text: '删除',
        key: 'delete',
        danger: true,
      }
    ],

    actions3: [
      {
        text: '备份',
        key: 'backup',
        description: '请选择要备份的内容',
        icon: 'https://gw.alipayobjects.com/mdn/rms_402983/afts/img/A*FTUXTLumtvwAAAAAAAAAAAAAARQnAQ'
      },
      {
        text: '保存',
        key: 'save',
        icon: 'https://gw.alipayobjects.com/mdn/rms_402983/afts/img/A*NZthT494VNoAAAAAAAAAAAAAARQnAQ'
      },
      {
        text: '同步',
        key: 'sync',
        icon: 'https://gw.alipayobjects.com/mdn/rms_402983/afts/img/A*a1RMTo21L3YAAAAAAAAAAAAAARQnAQ'
      }
    ]
  },

  handleOpenBasic(e) {
    const { index } = e.target.dataset;
    this.setData({
      [`visible${index}`]: true
    })
  },

  handleCloseBasic(e) {
    const { index } = e.target.dataset;
    this.setData({
      [`visible${index}`]: false
    })
  },

  handleAction(item, index, e) {
    if (item.key === 'delete') {
      my.confirm({
        content: '你确定要删除吗?'
      })
      return;
    }
    my.alert({
      content: `你点击了${item.key}`
    })
  }
})