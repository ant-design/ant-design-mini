Page({
  data: {
    value: '',
    items: [
      {
        text: '选项一',
        value: '1',
      },
      {
        text: '选项二',
        value: '2',
      },
      {
        text: '选项三',
        value: '3',
      },
      {
        text: '选项四',
        value: '4',
      },
      {
        text: '选项五',
        value: '5',
      },
    ],
    items1: new Array(100).fill(0).map((_, idx) => {
      return {
        text: `选项${idx + 1}`,
        value: `${idx + 1}`,
      };
    }),
  },
  changeSelect(v) {
    if (v.length > 0) {
      my.alert({
        content: `当前选择了 ${v}`,
      });
    } else {
      my.showToast({
        content: '未选择任何一项',
      });
    }
  },
  formatValue(fv) {
    return `${fv}🔥`;
  },
  onOpen() {
    my.alert({
      title: '选项卡打开',
    });
  },
  onTap() {
    this.ins.changeSelect('1');
  },
  ref(ins) {
    this.ins = ins;
  },
});
