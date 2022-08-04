Page({
  data: {
    value: [],
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
  handleChange(v, e) {
    console.log('onChange', v, e);
    if (v.length > 0) {
      my.showToast({
        content: `当前选择了 ${v}`,
      });
    } else {
      my.showToast({
        content: '未选择任何一项',
      });
    }
  },
  handleOpen() {
    console.log('open');
  },
  handleOk(value, e) {
    console.log('onOk', value, e);
  },
  handleFormat(selected) {
    if (selected) {
      if (Array.isArray(selected)) {
        return `🔥选择多项🔥`;
      } else {
        return `🔥${selected.text}🔥`;
      }
    }
    return '';
  },
});
