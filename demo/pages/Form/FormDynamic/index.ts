import { Form } from '../../../../src/Form/form';

let account = 1;
Page({
  data: {
    list: [
      {
        id: `Account${account++}`,
      },
      {
        id: `Account${account++}`,
      },
    ],
  },
  onLoad() {
    this.form = new Form();
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY || BUNDLE2H
    this.form.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (this.form) {
      this.form.addItem(ref.detail);
    } else {
      if (!this.formRefList) {
        this.formRefList = [];
      }
      this.formRefList.push(ref.detail);
    }
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  add() {
    this.setData({
      list: [
        ...this.data.list,
        {
          id: `Account${account++}`,
        },
      ],
    });
  },
  minus(e) {
    const { index } = e.currentTarget.dataset;
    const list = [...this.data.list];
    list.splice(index, 1);
    this.setData({
      list,
    });
  },
  async submit() {
    const values = await this.form.submit();
    console.log(values);
  },
});
