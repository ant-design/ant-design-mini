Page({
  data: {
    isCascaderClosableShow: false,
    areaValue: ['1112', '11121', '111213'],
    areaName: ['湖南', '湖南1', '湖南13'],
    confirmIcon: 'HeartOutline',
    areaOptions: [
      {
        value: '1111',
        title: '浙江',
        disabled: true,
        leaf: false,
        children: [
          {
            value: '11111',
            title: '杭州',
            leaf: false,
            children: [
              { value: '111111', title: '西湖区', leaf: true, },
              { value: '111112', title: '余杭区', leaf: true, }
            ]
          },
          {
            value: '11112',
            title: '温州',
            leaf: false,
            children: [
              { value: '111121', title: '鹿城区', leaf: true, },
              { value: '111122', title: '瓯海区', leaf: true, }
            ]
          }
        ]
      },
      {
        value: '1112',
        title: '湖南',
        leaf: false,
      },
      {
        value: '1113',
        title: '福建',
        leaf: false,
        children: [
          {
            value: '11131',
            title: '福州',
            leaf: false,
            children: [
              { value: '111311', title: '鼓楼区', leaf: true, },
              { value: '111312', title: '台江区', leaf: true, }
            ]
          }
        ]
      }, {
        value: '1114',
        title: '新疆',
        leaf: false,
        children: [
          {
            value: '11141',
            title: '乌鲁木齐',
            leaf: false,
            children: [
              { value: '111411', title: '沙依巴克区', leaf: true, },
              { value: '111412', title: '新市区', leaf: true, },
              { value: '111413', title: '米东区', leaf: true, },
              { value: '111414', title: '水磨沟区', leaf: true, },
              { value: '111415', title: '头屯河区', leaf: true, },
              { value: '111416', title: '达坂城区', leaf: true, }
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
      areaValue: list.map(i => i.value),
      areaName: list.map(i => i.title)
    })
  },
  handleOpenCascaderClosable() {
    this.setData({ isCascaderClosableShow: true });
  },
  onLazyLoad(node, resolve) {
    setTimeout(() => {
      resolve([1, 2, 3].map(num => {
        return {
          value: `${node.value}${num}`,
          title: `${node.title}${num}`,
          leaf: node.level >= 6
        }
      }))
    }, 500)
  }
});
