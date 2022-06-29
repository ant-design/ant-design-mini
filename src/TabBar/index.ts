/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabBarDefaultProps } from './props';

Component({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: TabBarDefaultProps,
  data: {
    activeIndex: undefined,
  },

  didMount() {
    const { defaultActiveKey, tabs } = this.props;
    this.setData({
      activeIndex: defaultActiveKey,
    });
  },

  didUpdate() {},

  methods: {
    onChange(e) {
      const { index } = e.target.dataset;
      const { activeIndex } = this.data;
      if(activeIndex === index) return;

      this.setData({
        activeIndex: index,
      });

      this.props.onChange && this.props.onChange(this.props[index], index);
    },
  },
});
