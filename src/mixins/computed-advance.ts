import equal from 'fast-deep-equal';

function computedData() {
  let isTriggerComputed = true;
  return  function render() {
    console.log('didUpdate')
    if (isTriggerComputed)  {
      const nextData = this.computed()
      const changedData = Object.keys(nextData).reduce((prev, item) => {
        // 移除 _ $ 开头的保留 props
        if (item[0] === '_' || item[0] === '$') {
          return prev;
        }
        if (typeof nextData[item] === 'function') {
          return prev;
        }
        if (equal(this.data[item], nextData[item])) {
          return prev;
        }
        // eslint-disable-next-line no-param-reassign
        prev[item] = nextData[item];
        return prev;
      }, {});
      if (Object.keys(changedData).length === 0) {
        return;
      }
      isTriggerComputed = false
      this.setData(changedData, () =>  {
        isTriggerComputed  =  true
      })
    }
  }
}

export default {
  didMount(): void {
    computedData().call(this);
  },
  didUpdate(): void {
    computedData().call(this)
  },
};