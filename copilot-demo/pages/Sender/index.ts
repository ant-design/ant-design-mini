const mockResponse = [
  '很高兴见到你！让我们开始愉快的对话吧。',
  '你说得很有意思，能详细说说吗？',
  '这是个很好的问题，我来仔细想想...',
  '我明白你的想法，确实值得深入讨论。',
  '感谢分享，这让我想到了一些新的观点。',
  '你提到的这点很有启发性，我们可以进一步探讨。',
];
Page({
  senderTimer: null,
  data: {
    value: '',
    value1: '',
    value3: '',
    value4: '',
    loading: false,
    scrollToView: '',
    bubbleList: [{ content: '你好，世界！' }],
    horizontalList: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*AdC9RZfDwicAAAAAAAAAAAAADtF8AQ/original',
        label: '我的日程',
        value: 'schedule',
        key: '1',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*Mbi1R5eGTecAAAAAAAAAAAAADtF8AQ/original',
        label: '快捷功能',
        value: 'suggestion',
        key: '2',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*WqBJSZEpPbwAAAAAAAAAAAAADtF8AQ/original',
        label: '诊断分析',
        value: 'analyze',
        key: '3',
      },
      {
        // 支持 antd-icon
        icon: 'MoreOutline',
        label: '更多',
        value: 'more',
        key: '4',
      },
    ],
  },
  /** 基础用法  */
  handleChange(value: string) {
    /// #if WECHAT
    // @ts-ignore
    value = value.detail;
    /// #endif
    this.setData({ value });
  },
  handleSend() {
    this.setData({ value: '' });
  },
  /** 发送loading状态  */
  handleChange1(value: string) {
    /// #if WECHAT
    // @ts-ignore
    value = value.detail;
    /// #endif
    this.setData({ value1: value });
  },
  handleSend1() {
    this.setData({ loading: true });
    this.senderTimer = setTimeout(() => {
      this.setData({ value1: '', loading: false });
    }, 2000);
  },
  handleCancel() {
    clearTimeout(this.senderTimer);
    this.setData({ loading: false });
  },
  /** 配合upload组件 */
  handleChange3(value: string) {
    /// #if WECHAT
    // @ts-ignore
    value = value.detail;
    /// #endif
    this.setData({ value3: value });
  },
  handleSend3() {
    this.setData({ value3: '' });
  },
  /** 配合bubble和prompts */
  addBubble(value: string) {
    const bubbleList = [...this.data.bubbleList];
    bubbleList.push({ content: value });
    this.setData({ bubbleList }, () => {
      this.setData({ scrollToView: `msg-${bubbleList.length - 1}` });
    });
  },
  handleChange4(value: string) {
    /// #if WECHAT
    // @ts-ignore
    value = value.detail;
    /// #endif
    this.setData({ value4: value });
  },
  onItemTap(e) {
    /// #if WECHAT
    // @ts-ignore
    e = e.detail;
    /// #endif
    this.handleSend4(e.label)
  },
  handleSend4(val: string) {
    if (!this.data.value4 && !val) return;
    this.addBubble(val || this.data.value4);
    this.setData({ value4: '' });
    setTimeout(() => {
      this.addBubble(
        mockResponse[Math.floor(Math.random() * mockResponse.length)]
      );
    }, 500);
  },
});
