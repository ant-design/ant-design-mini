Page({
  data: {
    items1: [{ title: '点我' }],
    items2: [{ title: '排序' }, { title: '筛选' }],
    current: -1,
    sortOptions: [
      {
        value: 1,
        title: '从小到大',
      },
      {
        value: 2,
        title: '从大到小',
      },
      {
        value: 3,
        title: '不排序',
      },
    ],
    filterOptions: [
      {
        value: 1,
        title: '只看热门',
      },
      {
        value: 2,
        title: '只看有销量',
      },
      {
        value: 3,
        title: '查看所有',
      },
    ],
    sortText: '',
    filterText: '',
  },
  handleChange(index) {
    console.log('onChange', index);
  },
  handleChangeControlled(index) {
    console.log('onChange', index);
    this.setData({ current: index });
  },
  handleSortChange(value) {
    this.setData({
      current: -1,
      sortText: this.data.sortOptions.find((v) => v.value === value).title,
    });
  },
  handleFilterChange(value) {
    this.setData({
      current: -1,
      filterText: this.data.filterOptions.find((v) => v.value === value).title,
    });
  },
});
