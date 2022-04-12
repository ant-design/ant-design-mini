import { SelectorDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formed from '../Form/mixin';

const getFixedValue = (value, multiple) => {
  let fixedValue;
  if (multiple) {
    fixedValue = value || [];
  } else {
    fixedValue = (value || []).slice(0, 1);
  }

  return fixedValue;
};

Component({
  mixins: [controlled({ defaultPropsValue: [] }), formed()],
  props: SelectorDefaultProps,
  data: {},
  methods: {
    onChange(e) {
      const { disabled, value } = e.currentTarget.dataset;
      const { multiple, items } = this.props;
      if (!disabled && !this.props.disabled) {
        const fixedValue = getFixedValue(this.data.cValue, multiple);
        if (multiple) {
          let nextValue: string[];
          // 之前已经选中，删除它
          if (fixedValue?.indexOf(value) !== -1) {
            nextValue = fixedValue?.filter((item) => {
              return item !== value;
            });
          } else {
            // 之前未选中，增加
            nextValue = [...fixedValue, value];
          }
          // 将 value 重新按 options 排序
          const sortValue = (v: string[]) => {
            return items
              .map((item) => item.value)
              .filter((item) => v.indexOf(item) !== -1);
          };
          nextValue = sortValue(nextValue);
          this.triggerChange(nextValue);
        } else {
          let nextValue = '';
          // 单选
          // 取消选中
          // eslint-disable-next-line no-lonely-if
          if (fixedValue?.[0] === value) {
            nextValue = '';
          } else {
            // 选中
            nextValue = value;
          }
          this.triggerChange(nextValue);
        }
      }
    },
  },
});
