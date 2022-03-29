Page({
  data: {
    componentList: [
      {
        components: [
          {
            type: '布局导航',
            list: [
              {
                name: 'List',
                nameZN: '列表',
                path: '/pages/List/index',
              },
              {
                name: 'Tabs',
                nameZN: 'Tabs',
                path: '/pages/Tabs/index',
              },
              {
                name: 'VTabs',
                nameZN: 'VTabs',
                path: '/pages/VTabs/index',
              },
              {
                name: 'Steps',
                nameZN: '步骤进度条',
                path: '/pages/Steps/index',
              },
              {
                name: 'Terms',
                nameZN: '协议',
                path: '/pages/Terms/index',
              },
              {
                name: 'Collapse',
                nameZN: '折叠面板',
                path: '/pages/Collapse/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '操作浮层',
            list: [
              {
                name: 'Popover',
                nameZN: '气泡菜单',
                path: '/pages/Popover/index',
              },
              {
                name: 'Modal',
                nameZN: 'Modal',
                path: '/pages/Modal/index',
              },
              {
                name: 'Dialog',
                nameZN: 'Dialog',
                path: '/pages/Dialog/index',
              },
              {
                name: 'Popup',
                nameZN: '弹出菜单',
                path: '/pages/Popup/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '结果类',
            list: [
              {
                name: 'Result',
                nameZN: '信息状态、操作结果',
                path: '/pages/Result/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '提示引导',
            list: [
              {
                name: 'Tips',
                nameZN: '小提示、向导提示',
                path: '/pages/Tips/index',
              },
              {
                name: 'NoticeBar',
                nameZN: '公告',
                path: '/pages/NoticeBar/index',
              },
              {
                name: 'Badge',
                nameZN: '红点，徽标',
                path: '/pages/Badge/index',
              },
              {
                name: 'Tag',
                nameZN: ' 标签',
                path: '/pages/Tag/index',
              },
              {
                name: 'Mask',
                nameZN: '背景蒙层',
                path: '/pages/Mask/index',
                deprecated: true,
              },
              {
                name: 'Avatar',
                nameZN: '头像',
                path: '/pages/Avatar/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '表单类',
            list: [
              {
                name: 'Form',
                nameZN: '表单',
                path: '/pages/Form/index',
              },
              {
                name: 'Button',
                nameZN: '按钮',
                path: '/pages/Button/index',
              },
              {
                name: 'Switch',
                nameZN: '开关',
                path: '/pages/Switch/index',
              },
              {
                name: 'RadioGroup',
                nameZN: '单选框',
                path: '/pages/RadioGroup/index',
              },
              {
                name: 'Checkbox',
                nameZN: '复选框',
                path: '/pages/Checkbox/index',
              },
              {
                name: 'CheckboxGroup',
                nameZN: '复选框',
                path: '/pages/CheckboxGroup/index',
              },
              {
                name: 'InputItem',
                nameZN: '输入框',
                path: '/pages/InputItem/index',
              },
              {
                name: 'Picker',
                nameZN: '选择框',
                path: '/pages/Picker/index',
              },
              {
                name: 'SearchBar',
                nameZN: '搜索框',
                path: '/pages/SearchBar/index',
              },
              {
                name: 'Stepper',
                nameZN: '步进器',
                path: '/pages/Stepper/index',
              },
              {
                name: 'Selector',
                nameZN: '选择器',
                path: '/pages/Selector/index',
              },
              {
                name: 'Filter',
                nameZN: '筛选',
                path: '/pages/Filter/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '手势类',
            list: [
              {
                name: 'SwipeAction',
                nameZN: '滑动删除',
                path: '/pages/SwipeAction/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '其他',
            list: [
              {
                name: 'Icon',
                nameZN: '图标',
                path: '/pages/Icon/index',
              },
              {
                name: 'Loading',
                nameZN: 'loading 加载',
                path: '/pages/Loading/index',
              },
              {
                name: 'SafeArea',
                nameZN: 'SafeArea',
                path: '/pages/SafeArea/index',
              },
            ],
          },
        ],
      },
    ],
    searchResult: [],
  },
  onLoad() {
    const { componentList } = this.data;
    const elNodeList = [];
    componentList.forEach((listNode) => {
      listNode.components[0].list.forEach((elNode) => {
        elNodeList.push(elNode);
      });
    });
    this.setData({
      elNodeList,
    });
  },
  onShow() {
    this.setData({
      searchResult: [],
    });
  },
  onClearSearch() {
    this.setData({
      searchResult: [],
    });
  },
  onSearch(e) {
    const { elNodeList } = this.data;
    if (e.length > 0) {
      const result = [];
      elNodeList.forEach((searchKey) => {
        if (searchKey.name.toLowerCase().match(e)) {
          result.push(searchKey);
        }
      });
      this.setData({
        searchResult: result,
      });
    } else {
      this.setData({
        searchResult: [],
      });
    }
  },
  listPress(e) {
    my.navigateTo({
      url: e.currentTarget.dataset.url,
    });
  },
});
