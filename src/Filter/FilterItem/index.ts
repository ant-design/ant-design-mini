/* eslint-disable @typescript-eslint/no-explicit-any */import { FilterItemDefaultProps } from './props';
import { context } from '../context';

Component({
  props: FilterItemDefaultProps,
  data: {
    _value: [],
    show: false,
    curValue: [],
    prevValue: [],
  },
  didMount() {
    const getValue = () => this.props.value;
    const isMult = () => this.props.type === 'multiple';
    const setValue = (val: string[]) => this.setData({
      _value: val,
    });
    const setShow = (show: boolean) => this.setData({
      show,
    });
    const getShow = () => this.data.show;
    const setPrevValue = (prevValue: any[]) => this.setData({
      prevValue,
    });
    const getCurValue = () => this.data.curValue;
    const getPlaceHolder = () => this.props.placeholder || '';
    const getid = () => `${this.$id}`;
    context.addItem(this.props.uid, `${this.$id}`, { isMult, getValue, setValue, getPlaceHolder, setShow, getid, getShow, setPrevValue, getCurValue });
    context.updateItemValue(this.props.uid, `${this.$id}`);
    this.setData({
      curValue: getValue(),
    });
    if (getValue()) {
      setTimeout(() => {
        this.setActive(true);
      });
    }
  },
  ref() {
    return {
      getCompInstance: () => this,
      changeSelect: (v: string | any[]) => this.onChange(v),
    };
  },
  methods: {
    onChange(v, label) {
      if (typeof this.props.onChange !== 'function') return;
      if (this.props.type === 'multiple') {
        this.setData({
          curValue: v,
          _value: v,
        });
        this.props.onChange(v);
        return;
      }

      this.setData({
        show: false,
      });

      // 单选
      this.props.onChange(v);
      this.setActive(v.length > 0);
      // 箭头动画
      this.resetArrow();
      // 更改占位符
      const group = context.getGroup(this.props.uid);
      if (group) {
        const placeHolderArray = group.getGroupDataVal();
        placeHolderArray[this.$id] = label;
        group.setGroupDataVal({ key: 'placeHolderArray', val: placeHolderArray });
      }
    },

    confirmSelector() {
      // 多选
      if (typeof this.props.onChange !== 'function') return;
      this.setData({
        prevValue: this.data.curValue,
        show: false,
      });
      this.props.onChange(this.data.curValue);
      this.setActive(this.data.curValue.length > 0);
      // 箭头动画
      this.resetArrow();
    },
    resetArrow() {
      const group = context.getGroup(this.props.uid);
      if (group) {
        group.setGroupDataVal({ key: 'currentFilterItemId', val: '' });
      }
    },
    resetSelector() {
      this.setData({
        _value: this.data.prevValue,
      });
    },

    setActive(active: boolean) {
      const group = context.getGroup(this.props.uid);
      if (group) {
        const val = { [this.$id]: active };
        group.setGroupDataVal({ key: 'activeArray', val });
      }
    },
  },
});
