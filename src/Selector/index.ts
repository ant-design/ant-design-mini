import { SelectorDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

const getFixedValue = (value, multiple) => {
  let fixedValue = [];
  if (value === null) {
    fixedValue = [];
  } else if (multiple && Array.isArray(value)) {
    fixedValue = value;
  } else if (!Array.isArray(value)) {
    fixedValue = [value];
  }
  return fixedValue;
};

Component({
  mixins: [controlled(), formMixin()],
  props: SelectorDefaultProps,
  data: {} as {
    cValue?: string[];
  },
  methods: {
    onChange(e) {
      const { disabled, value } = e.currentTarget.dataset;
      const { multiple, items, onEmptyTap, avoidEmpty } = this.props;
      if (!disabled && !this.props.disabled) {
        let nextValue: string[];
        const fixedValue = getFixedValue(this.data.cValue, multiple);
        // 单选、多选均触发，清空最后一个
        if (fixedValue?.length === 1 && fixedValue?.[0] === value) {
          if (onEmptyTap) {
            onEmptyTap(
              value,
              items.find((v) => v.value === value)
            );
          }
          if (avoidEmpty) {
            return;
          }
        }
        if (multiple) {
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
          const selectedItems = nextValue.map(
            (v) => items.filter((item) => item.value === v)?.[0]
          );
          this.cOnChange(nextValue, selectedItems);
        } else {
          // 单选
          // 取消选中
          // eslint-disable-next-line no-lonely-if
          if (fixedValue?.[0] === value) {
            nextValue = '';
          } else {
            // 选中
            nextValue = value;
          }
          const selectedItem =
            items.filter((item) => item.value === nextValue)?.[0] || null;
          this.cOnChange(nextValue, selectedItem);
        }
      }
    },
  },
});
