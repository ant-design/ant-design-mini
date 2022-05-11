export const componentList = [
  {
    type: '通用',
    list: [
      {
        name: 'Button',
        nameZN: '按钮',
        path: '/pages/Button/index',
      },
      {
        name: 'Icon',
        nameZN: '图标',
        path: '/pages/Icon/index',
      },
    ],
  },
  {
    type: '导航',
    list: [
      {
        name: 'Tabs',
        nameZN: '标签页',
        path: '/pages/Tabs/index',
      },
      {
        name: 'VTabs',
        nameZN: '纵向Tabs',
        path: '/pages/VTabs/index',
      },
    ],
  },
  {
    type: '信息展示',
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
      },  {
        name: 'List',
        nameZN: '列表',
        path: '/pages/List/index',
      },
      {
        name: 'Steps',
        nameZN: '步骤条',
        path: '/pages/Steps/index',
      },
      {
        name: 'SwipeAction',
        nameZN: '滑动操作',
        path: '/pages/SwipeAction/index',
      },
      {
        name: 'Tag',
        nameZN: ' 标签',
        path: '/pages/Tag/index',
      },
    ],
  },
  {
    type: '信息录入',
    list: [
      {
        name: 'Checkbox',
        nameZN: '复选框',
        path: '/pages/Checkbox/index',
      },
      {
        name: 'CheckboxGroup',
        nameZN: '复选框组',
        path: '/pages/CheckboxGroup/index',
      },
      {
        name: 'CheckList',
        nameZN: '可勾选列表',
        path: '/pages/Checklist/index',
      },
      {
        name: 'Filter',
        nameZN: '筛选卡',
        path: '/pages/Filter/index',
      },
      {
        name: 'Input',
        nameZN: '输入框',
        path: '/pages/InputItem/index',
      },
      {
        name: 'Picker',
        nameZN: '选择器',
        path: '/pages/Picker/index',
      },
      {
        name: 'RadioGroup',
        nameZN: '单选框',
        path: '/pages/RadioGroup/index',
      },
      {
        name: 'SearchBar',
        nameZN: '搜索框',
        path: '/pages/SearchBar/index',
      },
      {
        name: 'Selector',
        nameZN: '选择组',
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
    ],
  },
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
        nameZN: '加载中',
        path: '/pages/Loading/index',
      },
      {
        name: 'Modal',
        nameZN: '弹窗',
        path: '/pages/Modal/index',
      },
      {
        name: 'Popover',
        nameZN: '气泡菜单',
        path: '/pages/PopoverBase/index',
      },
      {
        name: 'Popup',
        nameZN: '弹出层',
        path: '/pages/Popup/index',
      },
      {
        name: 'Result',
        nameZN: '操作结果',
        path: '/pages/Result/index',
      },
      {
        name: 'Empty',
        nameZN: '空状态',
        path: '/pages/Empty/index',
      },
      {
        name: 'Toast',
        nameZN: '轻提示',
        path: '/pages/Toast/index',
      },
    ],
  },
  {
    type: '引导提示',
    list: [
      {
        name: 'Badge',
        nameZN: '徽标',
        path: '/pages/Badge/index',
      },
      {
        name: 'NoticeBar',
        nameZN: '通告栏',
        path: '/pages/NoticeBar/index',
      },
      {
        name: 'Tips',
        nameZN: '向导提示',
        path: '/pages/Tips/index',
      },
    ],
  },
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
        nameZN: '安全区',
        path: '/pages/SafeArea/index',
      },
    ],
  },
];

export const allComponents = componentList.reduce(
  (re, v) => [...re, ...v.list],
  []
);
