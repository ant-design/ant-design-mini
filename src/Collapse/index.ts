import { CollapseDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { IBoundingClientRect } from '../_util/base';
import createValue from '../mixins/value';


function getBoundingClientRect(selector: string) {
  return new Promise<IBoundingClientRect>((resolve, reject) => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          reject();
        }
      });
  });
}


Component({
  props: CollapseDefaultProps,
  data: {
    contentHeight: [],
    hasChange: false,
  },
  mixins: [createValue({
    valueKey: 'current',
    defaultValueKey: 'defaultCurrent',
    transformValue(current, extra) {
      const value = this.formatCurrent(current, extra ? extra.nextProps : this.props);
      return {
        needUpdate: true,
        value,
      };
    },
  })],
  didUpdate(prevProps, prevData) {
    if (prevProps.items !== this.props.items || !this.isEqualValue(prevData)) {
      this.updateContentHeight(
        this.getValue(prevData),
        this.getValue()
      );
    }
  },
  didMount() {
    const current = this.getValue();
    const contentHeight = this.props.items.map((item, index) => {
      if (current.indexOf(index) >= 0) {
        return '';
      }
      return '0px';
    });
    this.setData({
      hasChange: true,
      contentHeight,
    });
  },
  methods: {
    formatCurrent(val: number[], props) {
      let current = [...(val || [])];
      const items = props.items;
      current = current.filter(item => {
        if (!items[item] || items[item].disabled) {
          return false;
        }
        return true;
      });
      if (props.accordion) {
        current = current.length > 0 ? [current[0]] : [];
      }
      return [...current];
    },
    onChange(e) {
      const itemIndex = parseInt(e.currentTarget.dataset.index, 10);
      if (this.props.items[itemIndex] && this.props.items[itemIndex].disabled) {
        return;
      }
      const arr = this.getValue();
      let current = [...arr];
      const index = current.indexOf(itemIndex);
      if (index >= 0) {
        current.splice(index, 1);
      } else {
        if (this.props.accordion) {
          current = [itemIndex];
        } else {
          current.push(itemIndex);
          current.sort();
        }
      }
      if (!this.isControlled()) {
        this.update(current);
      }
      if (this.props.onChange) {
        this.props.onChange(current, fmtEvent(this.props, e));
      }
    },
    async updateContentHeight(prevCurrent: number[], nextCurrent: number[]) {
      const prevCurrentArray = prevCurrent;
      const nextCurrentArray = nextCurrent;
      const expandArray = [];
      const closeArray = [];
      nextCurrentArray.forEach(item => {
        if (prevCurrentArray.indexOf(item) < 0) {
          expandArray.push(item);
        }
      });
      prevCurrentArray.forEach(item => {
        if (nextCurrentArray.indexOf(item) < 0) {
          closeArray.push(item);
        }
      });
      let contentHeight = await Promise.all(this.props.items.map(async (item, index) => {
        if (expandArray.indexOf(index) >= 0 || closeArray.indexOf(index) >= 0) {
          const { height } = await getBoundingClientRect(`.ant-collapse-item-content-${this.$id}-${index}`);
          return `${height}px`;
        }
        return this.data.contentHeight[index];
      }));
      if (closeArray.length === 0) {
        this.setData({
          contentHeight,
        });
      } else {
        this.setData({
          contentHeight,
        });
        contentHeight = contentHeight.map((item, index) => {
          if (closeArray.indexOf(index) >= 0) {
            return '0px';
          }
          return item;
        });
        setTimeout(() => {
          this.setData({
            contentHeight,
          });
        }, 10);
      }
    },
    resetContentHeight(e) {
      const index = parseInt(e.currentTarget.dataset.index, 10);
      if (this.getValue().indexOf(index) < 0) {
        return;
      }
      const contentHeight = [...this.data.contentHeight];
      contentHeight[index] = '';
      this.setData({
        contentHeight,
      });
    },
  },
});
