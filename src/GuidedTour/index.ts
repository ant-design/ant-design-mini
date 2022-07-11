import { context } from './context';
import { GuidedTourDefaultProps } from './props';

Component({
  data: {
    nextButtonVisible: false,
    lastButtonVisible: false,
    jumpButtonVisible: false,
    konwButtonVisible: false,
    currentIndex: 0,
    items: [],
  },
  props: GuidedTourDefaultProps,
  didMount() {
    const { defaultIndex } = this.props;
    const key = this.getKey();
    context.setButtons(key, this.setData, this.props.onChange);
    context.setCurrentIndex(key, defaultIndex);
  },
  didUpdate(props) {
    if (!props.visible) {
      const { defaultIndex } = props;
      const key = this.getKey();
      context.setButtons(key, this.setData, this.props.onChange);
      context.setCurrentIndex(key, defaultIndex);
    }
  },
  didUnmount() {
    const key = this.getKey();
    context.removeGroup(key);
  },
  methods: {
    setButtonVisible(buttonVisibles) {
      this.setData(buttonVisibles);
    },

    onNext() {
      const key = this.getKey();
      const stepLength = context.getItems(key).length;
      const index = this.getIndex();
      if (index < stepLength - 1) {
        context.setCurrentIndex(key, context.getItems(key)[index + 1].index);
      }
    },

    onLast() {
      const key = this.getKey();
      const index = this.getIndex();
      if (index !== 0) {
        context.setCurrentIndex(key, context.getItems(key)[index - 1].index);
      }
    },

    onCancel() {
      this.props.onCancel();
    },

    getIndex() {
      const key = this.getKey();
      const currentStepsIndex = context.getCurrentIndex(key);
      return context
        .getItems(key)
        .findIndex((i) => i.index === currentStepsIndex);
    },

    getKey() {
      const { uid } = this.props;
      return `${this.$page.$id}-${uid}`;
    },
  },
});
