import { EmptyDefaultProps } from './props';

Component({
  props: EmptyDefaultProps,

  methods: {
    onMainBtnClick() {
      const { onMainBtnClick } = this.props;
      onMainBtnClick && onMainBtnClick.call(this.props);
    },
    onSubBtnClick() {
      const { onSubBtnClick } = this.props;
      onSubBtnClick && onSubBtnClick.call(this.props);
    },
  }
})