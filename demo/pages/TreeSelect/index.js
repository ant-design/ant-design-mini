const mockingThreeLevelOptions = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
        children: [
          {
            label: '西湖区',
            value: '西湖区',
          },
          {
            label: '上城区',
            value: '上城区',
          },
          {
            label: '余杭区',
            value: '余杭区',
            disabled: true,
          },
        ],
      },
      {
        label: '温州',
        value: '温州',
        children: [
          {
            label: '鹿城区',
            value: '鹿城区',
          },
          {
            label: '龙湾区',
            value: '龙湾区',
            disabled: true,
          },
          {
            label: '瓯海区',
            value: '瓯海区',
          },
        ],
      },
      {
        label: '宁波',
        value: '宁波',
        children: [
          {
            label: '海曙区',
            value: '海曙区',
          },
          {
            label: '江北区',
            value: '江北区',
          },
          {
            label: '镇海区',
            value: '镇海区',
          },
        ],
      },
    ],
  },
  {
    label: '安徽',
    value: '安徽',
    children: [
      {
        label: '合肥',
        value: '合肥',
        children: [
          {
            label: '包河区',
            value: '包河区',
          },
          {
            label: '蜀山区',
            value: '蜀山区',
          },
          {
            label: '瑶海区',
            value: '瑶海区',
          },
        ],
      },
      {
        label: '芜湖',
        value: '芜湖',
        children: [
          {
            label: '镜湖区',
            value: '镜湖区',
          },
          {
            label: '弋江区',
            value: '弋江区',
          },
          {
            label: '湾沚区',
            value: '湾沚区',
          },
        ],
      },
    ],
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京',
        children: [
          {
            label: '玄武区',
            value: '玄武区',
          },
          {
            label: '秦淮区',
            value: '秦淮区',
          },
          {
            label: '建邺区',
            value: '建邺区',
          },
        ],
      },
      {
        label: '苏州',
        value: '苏州',
        children: [
          {
            label: '虎丘区',
            value: '虎丘区',
          },
          {
            label: '吴中区',
            value: '吴中区',
          },
          {
            label: '相城区',
            value: '相城区',
          },
        ],
      },
    ],
  },
];
const mockingTwoLevelOptions = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
      },
      {
        label: '温州',
        value: '温州',
      },
      {
        label: '宁波',
        value: '宁波',
      },
    ],
  },
  {
    label: '安徽',
    value: '安徽',
    children: [
      {
        label: '合肥',
        value: '合肥',
      },
      {
        label: '芜湖',
        value: '芜湖',
      },
    ],
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京',
      },
      {
        label: '苏州',
        value: '苏州',
      },
    ],
  },
];

Page({
  data: {
    defaultValue: ['安徽', '芜湖', '弋江区'],
    defaultValueTreeSelectEnable: false,

    threeLevelTreeSelectEnable: false,
    mockingThreeLevelOptions: [],
    threeLevelSelectedOptions: [],

    twoLevelTreeSelectEnable: false,
    twoLevelSelectedOptions: [],
    mockingTwoLevelOptions: [],
  },
  onReady() {
    this.setData({
      mockingThreeLevelOptions,
      mockingTwoLevelOptions
    })
  },

  onThreeLevelTreeSelectToggle() {
    this.setData({
      threeLevelTreeSelectEnable: !this.data.threeLevelTreeSelectEnable,
    })
  },

  onDefaultValueThreeLevelTreeSelectToggle() {
    this.setData({
      defaultValueTreeSelectEnable: !this.data.defaultValueTreeSelectEnable,
    })
  },

  onTwoLevelTreeSelectToggle() {
    this.setData({
      twoLevelTreeSelectEnable: !this.data.twoLevelTreeSelectEnable,
    })
  },


  handleChange(options) {
    if (options.length === 3) {
      this.setData({
        threeLevelTreeSelectEnable: false,
        threeLevelSelectedOptions: options,
      })
    }

    if (options.length === 2) {
      this.setData({
        twoLevelTreeSelectEnable: false,
        twoLevelSelectedOptions: options
      })
    }
  },

  handleDefaultValueChange(options) {
    console.log('===options', options)
    if (options.length === 3) {
      this.setData({
        defaultValue: options,
        defaultValueTreeSelectEnable: false
      });
    }
  },

  changeValue() {
    this.setData({
      defaultValue: ['安徽', '合肥', '包河区']
    })
  }
});
