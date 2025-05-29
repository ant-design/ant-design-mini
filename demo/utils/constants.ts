export const componentList = [
  {
    type: 'Copilot',
    list: [
      { name: 'Bubble', nameZN: '气泡', path: '/pages/Bubble/index' },
      /// #if ALIPAY || WECHAT
      {
        name: 'Conversations',
        nameZN: '管理会话',
        path: '/pages/Conversations/index',
      },
      /// #endif
      { name: 'Prompts', nameZN: '提示列表', path: '/pages/Prompts/index' },
      { name: 'Welcome', nameZN: '欢迎', path: '/pages/Welcome/index' },
      { name: 'Actions', nameZN: '操作列表', path: '/pages/Actions/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Sender', nameZN: '发送器', path: '/pages/Sender/index' },
      /// #endif
      {
        name: 'ThoughtChain',
        nameZN: '思维链',
        path: '/pages/ThoughtChain/index',
      },
    ],
  },
  {
    type: '通用',
    list: [
      { name: 'Button', nameZN: '按钮', path: '/pages/Button/index' },
      { name: 'Icon', nameZN: '图标', path: '/pages/Icon/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Sticky', nameZN: '黏性吸附', path: '/pages/Sticky/index' },
      /// #endif
    ],
  },
  {
    type: '导航',
    list: [
      { name: 'Footer页脚', nameZN: 'Footer页脚', path: '/pages/Footer/index' },
      {
        name: 'TabBar',
        nameZN: 'TabBar底部标签栏',
        path: '/pages/TabBar/index',
      },
      { name: 'Tabs', nameZN: '标签页', path: '/pages/Tabs/index' },
      {
        name: 'TabsElevator',
        nameZN: '标签页-电梯模式',
        path: '/pages/Tabs/TabsElevator/index',
      },
      {
        name: 'TabsVerticalElevator',
        nameZN: '标签页-纵向电梯模式',
        path: '/pages/Tabs/TabsVerticalElevator/index',
      },
    ],
  },
  {
    type: '信息展示',
    list: [
      { name: 'Card', nameZN: '基础卡片', path: '/pages/Card/index' },
      { name: 'Avatar', nameZN: '头像', path: '/pages/Avatar/index' },
      /// #if ALIPAY || WECHAT
      { name: 'IndexBar', nameZN: '索引', path: '/pages/IndexBar/index' },
      /// #endif
      { name: 'Collapse', nameZN: '折叠面板', path: '/pages/Collapse/index' },
      { name: 'Grid', nameZN: '宫格', path: '/pages/Grid/index' },
      { name: 'List', nameZN: '列表', path: '/pages/List/index' },
      /// #if ALIPAY || WECHAT
      {
        name: 'SwipeAction',
        nameZN: '滑动操作',
        path: '/pages/SwipeAction/index',
      },
      /// #endif
      { name: 'Steps', nameZN: '步骤条', path: '/pages/Steps/index' },
      { name: 'GuideTour', nameZN: '新手引导', path: '/pages/GuideTour/index' },
      { name: 'Tag', nameZN: ' 标签', path: '/pages/Tag/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Progress', nameZN: '进度条', path: '/pages/Progress/index' },
      /// #endif
      { name: 'Divider', nameZN: '分割线', path: '/pages/Divider/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Table', nameZN: '表格', path: '/pages/Table/index' },
      /// #endif
    ],
  },
  {
    type: '信息录入',
    list: [
      /// #if ALIPAY || WECHAT
      { name: 'Checkbox', nameZN: '复选框', path: '/pages/Checkbox/index' },
      /// #endif
      {
        name: 'Checklist',
        nameZN: '可勾选列表',
        path: '/pages/Checklist/index',
      },
      /// #if ALIPAY || WECHAT
      { name: 'Form', nameZN: '表单', path: '/pages/Form/index' },

      { name: 'Input', nameZN: '输入框', path: '/pages/Input/index' },
      {
        name: 'InputCustom',
        nameZN: '输入框-自定义',
        path: '/pages/InputCustom/index',
      },
      {
        name: 'InputTextarea',
        nameZN: '输入框-textarea',
        path: '/pages/InputTextarea/index',
      },
      {
        name: 'InputSearchBar',
        nameZN: '输入框-搜索框',
        path: '/pages/InputSearchBar/index',
      },
      { name: 'Picker', nameZN: '选择器', path: '/pages/Picker/index' },
      {
        name: 'DatePicker',
        nameZN: '时间选择器',
        path: '/pages/DatePicker/index',
      },
      { name: 'Radio', nameZN: '单选框', path: '/pages/Radio/index' },
      { name: 'Stepper', nameZN: '步进器', path: '/pages/Stepper/index' },
      {
        name: 'ImageUpload',
        nameZN: '图片上传',
        path: '/pages/ImageUpload/index',
      },
      {
        name: 'RareWordsKeyboard',
        nameZN: '生僻字输入键盘',
        path: '/pages/RareWordsKeyboard/index',
      },
      { name: 'Calendar', nameZN: '日历', path: '/pages/Calendar/index' },
      {
        name: 'Postscript',
        nameZN: '资金附言',
        path: '/pages/Postscript/index',
      },
      {
        name: 'NumberInput',
        nameZN: '金额输入框',
        path: '/pages/NumberInput/index',
      },
      /// #endif
      { name: 'Selector', nameZN: '选择组', path: '/pages/Selector/index' },
      { name: 'Slider', nameZN: '滑动输入条', path: '/pages/Slider/index' },
      { name: 'Switch', nameZN: '开关', path: '/pages/Switch/index' },
      { name: 'Rate', nameZN: '星级', path: '/pages/Rate/index' },
      {
        name: 'NumberKeyboard',
        nameZN: '数字键盘-基本使用',
        path: '/pages/NumberKeyboard/index',
      },
      {
        name: 'NumberKeyboardAmount',
        nameZN: '数字键盘-金额输入框',
        path: '/pages/NumberKeyboardAmount/index',
      },
      {
        name: 'NumberKeyboardCode',
        nameZN: '数字键盘-验证码输入框',
        path: '/pages/NumberKeyboardCode/index',
      },
      {
        name: 'NumberKeyboardNumber',
        nameZN: '数字键盘-数字输入框',
        path: '/pages/NumberKeyboardNumber/index',
      },
    ],
  },
  {
    type: '反馈',
    list: [
      {
        name: 'ActionSheet',
        nameZN: '动作面板',
        path: '/pages/ActionSheet/index',
      },
      { name: 'Loading', nameZN: '加载中', path: '/pages/Loading/index' },
      { name: 'Skeleton', nameZN: '骨架屏', path: '/pages/Skeleton/index' },
      { name: 'Dialog', nameZN: '弹窗', path: '/pages/Dialog/index' },
      { name: 'Popover', nameZN: '气泡卡片', path: '/pages/Popover/index' },
      /// #if ALIPAY || WECHAT
      {
        name: 'PopoverList',
        nameZN: '气泡菜单',
        path: '/pages/PopoverList/index',
      },
      /// #endif
      { name: 'Popup', nameZN: '弹出层', path: '/pages/Popup/index' },
      { name: 'Result', nameZN: '操作结果', path: '/pages/Result/index' },
      { name: 'Empty', nameZN: '空状态', path: '/pages/Empty/index' },
      { name: 'Toast', nameZN: '轻提示', path: '/pages/Toast/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Feedback', nameZN: '信息反馈', path: '/pages/Feedback/index' },
      /// #endif
    ],
  },
  {
    type: '引导提示',
    list: [
      { name: 'Badge', nameZN: '徽标', path: '/pages/Badge/index' },
      { name: 'NoticeBar', nameZN: '通告栏', path: '/pages/NoticeBar/index' },
    ],
  },
  {
    type: '业务组件',
    list: [
      { name: 'Countdown', nameZN: '倒计时', path: '/pages/Countdown/index' },
      /// #if ALIPAY || WECHAT
      { name: 'Voucher', nameZN: '优惠券', path: '/pages/Voucher/index' },
      {
        name: 'SelectContact',
        nameZN: '选人组件',
        path: '/pages/SelectContact/index',
      },
      /// #endif
      { name: 'Terms', nameZN: '协议', path: '/pages/Terms/index' },
      {
        name: 'TermsFixed',
        nameZN: '固定底部协议',
        path: '/pages/Terms/Fixed/index',
      },
    ],
  },
  {
    type: '实验性',
    list: [
      {
        name: 'AutoResize',
        nameZN: '文本自适应',
        path: '/pages/AutoResize/index',
      },
      {
        name: 'ConfigProvider',
        nameZN: '全局容器',
        path: '/pages/ConfigProvider/index',
      },
      {
        name: 'PageContainer',
        nameZN: '页面容器',
        path: '/pages/PageContainer/index',
      },
      { name: 'Typography', nameZN: '排版', path: '/pages/Typography/index' },
      { name: 'SafeArea', nameZN: '安全区', path: '/pages/SafeArea/index' },
    ],
  },
  {
    type: '待废弃',
    list: [
      { name: 'Container', nameZN: '容器', path: '/pages/Container/index' },
      { name: 'Modal', nameZN: '对话框', path: '/pages/Modal/index' },
    ],
  },
];

export const allComponents = componentList.reduce(
  (re, v) => [...re, ...v.list],
  []
);
