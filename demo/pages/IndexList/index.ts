Page({
  data: {
    activeTab: 'base',
    tabs: [
      { type: 'base', text: '基础用法' },
      { type: 'diy', text: '自定义slot' },
      { type: 'only', text: '只要索引' }
    ],
    indexList1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    indexList2: ['热', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '#'],
    indexList3: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    indexArr1: [],
    indexArr2: [],
  },
  onLoad() {
    const { indexList1, indexList2 } = this.data;
    const indexArr1 = indexList1.map(u => {
      return [
        {
          index: u,
          name: u + '文本',
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
        },
        {
          index: u,
          name: u + '文本',
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
        },
        {
          index: u,
          name: u + '文本',
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
        },
        {
          index: u,
          name: u + '文本',
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
        }
      ]
    });
    this.setData({ indexArr1: indexArr1.flat() });
    const indexArr2 = indexList2.map(u => {
      return [
        {
          index: u,
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
          name: u + '文本',
          text: '这是一段文本',
        },
        {
          index: u,
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
          name: u + '文本',
          text: '这是一段文本',
        },
        {
          index: u,
          avator: 'https://gw.alipayobjects.com/mdn/rms_eb2664/afts/img/A*bFuBQZuNErMAAAAAAAAAAABkARQnAQ',
          name: u + '文本',
          text: '这是一段文本',
        },
      ]
    });
    this.setData({ indexArr2: indexArr2.flat() });
  },
  onTapTab(e) {
    const { type } = e.target.dataset.item;
    this.setData({ activeTab: type });
  },
  onTouch1(key: string) {
    console.log('onTouch1:',key);
  },
  onTouch2(key: string) {
    console.log('onTouch2:',key);
  },
  onTouch3(key: string) {
    console.log('onTouch3:',key);
  },
});
