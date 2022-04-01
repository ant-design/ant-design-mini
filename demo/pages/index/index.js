Page({
  data: {
    componentList: [
      {
        components: [
          {
            type: '数据展示',
            list: [
              {
                name: 'Avatar',
                nameZN: '头像',
                path: '/pages/Avatar/index',
              },
              {
                name: 'Collapse',
                nameZN: '折叠面板',
                path: '/pages/Collapse/index',
              },
              {
                name: 'Container',
                nameZN: '容器',
                path: '/pages/Container/index',
              },
              {
                name: 'Filter',
                nameZN: '筛选',
                path: '/pages/Filter/index',
              },
              {
                name: 'Icon',
                nameZN: '图标',
                path: '/pages/Icon/index',
              },
              {
                name: 'List',
                nameZN: '列表',
                path: '/pages/List/index',
              },
              {
                name: 'SearchBar',
                nameZN: '搜索框',
                path: '/pages/SearchBar/index',
              },
              {
                name: 'Steps',
                nameZN: '步骤进度条',
                path: '/pages/Steps/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '反馈',
            list: [
              {
                name: 'Dialog',
                nameZN: '对话框',
                path: '/pages/Dialog/index',
              },
              {
                name: 'Loading',
                nameZN: '加载效果',
                path: '/pages/Loading/index',
              },
              // {
              //   name: 'Mask',
              //   nameZN: '背景蒙层',
              //   path: '/pages/Mask/index',
              //   deprecated: true,
              // },
              {
                name: 'Modal',
                nameZN: '通用弹窗',
                path: '/pages/Modal/index',
              },
              {
                name: 'Popover',
                nameZN: '气泡菜单',
                path: '/pages/PopoverBase/index',
              },
              {
                name: 'Popup',
                nameZN: '弹出菜单',
                path: '/pages/Popup/index',
              },
              {
                name: 'Result',
                nameZN: '信息状态、操作结果',
                path: '/pages/Result/index',
              },
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
            type: '表单类组件',
            list: [
              {
                name: 'Button',
                nameZN: '按钮',
                path: '/pages/Button/index',
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
                name: 'Input',
                nameZN: '输入框',
                path: '/pages/InputItem/index',
              },
              {
                name: 'Picker',
                nameZN: '选择框',
                path: '/pages/Picker/index',
              },
              {
                name: 'RadioGroup',
                nameZN: '单选框',
                path: '/pages/RadioGroup/index',
              },
              {
                name: 'Selector',
                nameZN: '选择器',
                path: '/pages/Selector/index',
              },
              {
                name: 'Stepper',
                nameZN: '步进器',
                path: '/pages/Stepper/index',
              },
              {
                name: 'Switch',
                nameZN: '开关',
                path: '/pages/Switch/index',
              },
              {
                name: 'Terms',
                nameZN: '协议',
                path: '/pages/Terms/index',
              },
              {
                name: 'ImageUpload',
                nameZN: '图片上传',
                path: '/pages/ImageUpload/index',
              }
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '导航',
            list: [
              {
                name: 'Badge',
                nameZN: '红点，徽标',
                path: '/pages/Badge/index',
              },
              {
                name: 'NoticeBar',
                nameZN: '公告',
                path: '/pages/NoticeBar/index',
              },
              {
                name: 'Tabs',
                nameZN: '横向Tabs',
                path: '/pages/Tabs/index',
              },
              {
                name: 'Tag',
                nameZN: ' 标签',
                path: '/pages/Tag/index',
              },
              {
                name: 'Tips',
                nameZN: '小提示、向导提示',
                path: '/pages/Tips/index',
              },
              {
                name: 'VTabs',
                nameZN: '纵向Tabs',
                path: '/pages/VTabs/index',
              },
            ],
          },
        ],
      },
      {
        components: [
          {
            type: '实验性质的组件',
            list: [
              {
                name: 'Form',
                nameZN: '表单',
                path: '/pages/Form/index',
              },
              {
                name: 'SafeArea',
                nameZN: '刘海屏安全区域',
                path: '/pages/SafeArea/index',
              },
            ],
          },
        ],
      },
    ],
    finding: false,
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
      finding: false,
      searchResult: [],
    });
  },
  onClearSearch() {
    this.setData({
      finding: false,
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
        finding: true,
        searchResult: result,
      });
    } else {
      this.setData({
        finding: false,
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
