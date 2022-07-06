Component({
  props: {
    dateItem: {}, // 当前item对应的日期数据 ICalendarItemData
    onChange: () => { },
  },
  didMount () {
  },
  methods: {
    onChoiceDate() {
      const { dateItem, onChange } = this.props;
      onChange && onChange(dateItem);
    },
    console(args) {
      console.log(...args)
    }
  },
  didUpdate() {

  },
  didMount() {

  },
});
