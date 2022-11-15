/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabBarDefaultProps } from './props';

Component({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: TabBarDefaultProps,
  data: {
    activeIndex: undefined,
  },

  didMount() {
    const { activeKey } = this.props;
    this.setData({
      activeIndex: activeKey,
    });
  },

  didUpdate() {
    const { activeKey } = this.props;
    const { activeIndex } = this.data;
    if(activeIndex === activeKey) return;
    this.setData({
      activeIndex: activeKey,
    });
  },

  methods: {
    onChange(e) {
      const { index } = e.target.dataset;
      const { activeIndex } = this.data;
      if(activeIndex === index) return;

      this.setData({
        activeIndex: index,
      });

      this.props.onChange && this.props.onChange(this.props.tabs[index], index);
    },
  },
});
