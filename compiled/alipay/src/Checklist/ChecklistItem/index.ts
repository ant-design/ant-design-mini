import { ChecklistItemDefaultProps } from './props';

Component({
  props: ChecklistItemDefaultProps,
  methods: {
    onChecklistItemClick() {
      this.props.onChange(this.props.item);
    },
  },
});
