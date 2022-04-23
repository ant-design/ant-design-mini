Page({
  data: {
    isCascaderClosableShow: false,
    areaValue: ['1111', '11111', '111111'],
    confirmIcon: 'HeartOutline',
    keysConf: {
      valueKey: 'val',
      titleKey: 'text',
      childrenKey: 'childs',
    },
    areaOptions: [
      {
        val: '1111',
        text: '浙江',
        childs: [
          {
            val: '11111',
            text: '杭州',
            childs: [
              { val: '111111', text: '西湖区' },
              { val: '111112', text: '余杭区' }
            ]
          },
          {
            val: '11112',
            text: '温州',
            childs: [
              { val: '111121', text: '鹿城区' },
              { val: '111122', text: '瓯海区' }
            ]
          }
        ]
      },
      {
        val: '1112',
        text: '湖南',
      },
      {
        val: '1113',
        text: '福建',
        childs: [
          {
            val: '11131',
            text: '福州',
            childs: [
              { val: '111311', text: '鼓楼区' },
              { val: '111312', text: '台江区' }
            ]
          }
        ]
      }, {
        val: '1114',
        text: '新疆',
        childs: [
          {
            val: '11141',
            text: '乌鲁木齐',
            childs: [
              { val: '111411', text: '沙依巴克区' },
              { val: '111412', text: '新市区' },
              { val: '111413', text: '米东区' },
              { val: '111414', text: '水磨沟区' },
              { val: '111415', text: '头屯河区' },
              { val: '111416', text: '达坂城区' }
            ]
          }
        ]
      }
    ]
  },

  handleClose() {
    this.setData({
      isNoBtnShow: false,
      isMaskClosableShow: false,
      isCascaderClosableShow: false
    });
  },
  handleChange(e, list) {
    this.setData({
      areaValue: list.map(i => i[this.data.keysConf.valueKey])
    })
  },
  handleOpenCascaderClosable() {
    this.setData({ isCascaderClosableShow: true });
  },
});
