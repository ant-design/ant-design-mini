Page({
  data: {
    activeTab: 'base',
    tabs: [
      { type: 'base', text: '基础用法' },
      { type: 'diy', text: '自定义slot' },
      { type: 'only', text: '仅有索引' }
    ],
    // value: '文本-三-2',
    scrollToKey: '六',
    indexList: [],
    indexListSlot: [],
    indexListOnly: [],
    indexList1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    indexList2: ['热', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '#'],
  },
  onLoad() {
    const { indexList1, indexList2 } = this.data;
    const indexList = indexList1.map((u, i) => {
      const item = { 
        label: '文本',
        value: `文本-${u}-${i}`,
        avator: 'https://gw.alipayobjects.com/mdn/rms_b20dc2/afts/img/A*sOFHSZm9ajkAAAAAAAAAAAAAARQnAQ',
      }
      const obj = {
        key: u,
        title: u,
        items: [ item, item, item, item ],
      }
      return obj;
    });
    this.setData({ indexList });
    const indexListSlot = indexList2.map((u) => {
      const item = { 
        label: '文本',
        value: `文本-${u}`,
        avator: 'https://gw.alipayobjects.com/mdn/rms_b20dc2/afts/img/A*sOFHSZm9ajkAAAAAAAAAAAAAARQnAQ',
        text: '这是一段文本',
      }
      const obj = {
        key: u,
        title: u,
        items: [ item, item, item, item ],
      }
      return obj;
    });
    this.setData({ indexListSlot });
    const indexListOnly = indexList2.map((u, i) => {
      const obj = {
        key: u,
        title: u,
      }
      return obj;
    });
    this.setData({ indexListOnly });
  },
  onTapTab(e) {
    const { type } = e.target.dataset.item;
    this.setData({ activeTab: type });
  },
  onChange1(item: object) {
    console.log('onChange:', item);
  },
  onChangeSwipeKey1(key: string) {
    console.log('onChangeSwipeKey:', key);
  },
});
