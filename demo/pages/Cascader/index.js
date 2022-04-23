Page({
  data: {
    isCascaderClosableShow: false,
    areaValue: [],
    confirmIcon: 'HeartOutline',
    areaOptions: [
      {
        value: '1111',
        title: '浙江',
        disabled:true,
        children: [
          {
            value: '11111',
            title: '杭州',
            children: [
              { value: '111111', title: '西湖区' },
              { value: '111112', title: '余杭区' }
            ]
          },
          {
            value: '11112',
            title: '温州',
            children: [
              { value: '111121', title: '鹿城区' },
              { value: '111122', title: '瓯海区' }
            ]
          }
        ]
      },
      {
        value: '1112',
        title: '湖南',
      },
      {
        value: '1113',
        title: '福建',
        children: [
          {
            value: '11131',
            title: '福州',
            children: [
              { value: '111311', title: '鼓楼区' },
              { value: '111312', title: '台江区' }
            ]
          }
        ]
      }, {
        value: '1114',
        title: '新疆',
        children: [
          {
            value: '11141',
            title: '乌鲁木齐',
            children: [
              { value: '111411', title: '沙依巴克区' },
              { value: '111412', title: '新市区' },
              { value: '111413', title: '米东区' },
              { value: '111414', title: '水磨沟区' },
              { value: '111415', title: '头屯河区' },
              { value: '111416', title: '达坂城区' }
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
  handleChange(e,list) {
    this.setData({
      areaValue:list.map(i=>i.value)
    })
  },
  handleOpenCascaderClosable() {
    this.setData({ isCascaderClosableShow: true });
  },
});
