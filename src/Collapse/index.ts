import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { CollapseDefaultProps } from './props';

Component({
  props: CollapseDefaultProps,
  data: {
    contentHeight: [],
    hasChange: false,
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    async getBoundingClientRectWithBuilder(builder: (id: string) => string) {
      return await getInstanceBoundingClientRect(
        this.getInstance(),
        builder(this.$id ? `-${this.$id}` : '')
      );
    },
    formatCurrent(val: number[], props) {
      let current = [...(val || [])];
      const items = props.items;
      current = current.filter((item) => {
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
      const [items, accordion] = getValueFromProps(this, [
        'items',
        'accordion',
      ]);
      if (items[itemIndex] && items[itemIndex].disabled) {
        return;
      }
      const arr = this.getValue();
      let current = [...arr];
      const index = current.indexOf(itemIndex);
      if (index >= 0) {
        current.splice(index, 1);
      } else {
        if (accordion) {
          current = [itemIndex];
        } else {
          current.push(itemIndex);
          current.sort();
        }
      }
      if (!this.isControlled()) {
        this.update(current);
      }
      triggerEvent(this, 'change', current, e);
    },
    async updateContentHeight(prevCurrent: number[], nextCurrent: number[]) {
      const prevCurrentArray = prevCurrent;
      const nextCurrentArray = nextCurrent;
      const expandArray = [];
      const closeArray = [];
      nextCurrentArray.forEach((item) => {
        if (prevCurrentArray.indexOf(item) < 0) {
          expandArray.push(item);
        }
      });
      prevCurrentArray.forEach((item) => {
        if (nextCurrentArray.indexOf(item) < 0) {
          closeArray.push(item);
        }
      });
      const items = getValueFromProps(this, 'items');
      let contentHeight = await Promise.all(
        items.map(async (item, index) => {
          if (
            expandArray.indexOf(index) >= 0 ||
            closeArray.indexOf(index) >= 0
          ) {
            const { height } = await this.getBoundingClientRectWithBuilder(
              (id) => `.ant-collapse-item-content${id}-${index}`
            );
            return `${height}px`;
          }
          return this.data.contentHeight[index];
        })
      );
      if (closeArray.length === 0) {
        this.setData({
          contentHeight,
        });
      } else {
        this.setData({
          contentHeight,
        });
        setTimeout(() => {
          contentHeight = contentHeight.map((item, index) => {
            if (closeArray.indexOf(index) >= 0) {
              return '0px';
            }
            return item;
          });
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

  mixins: [
    createValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
      transformValue(current, extra) {
        const value = this.formatCurrent(
          current,
          extra ? extra.nextProps : getValueFromProps(this)
        );
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],

  /// #if ALIPAY || ALIPAYNATIVE
  didUpdate(prevProps, prevData) {
    console.log(
      prevProps.items !== this.props.items,
      !this.isEqualValue(prevData)
    );
    if (prevProps.items !== this.props.items || !this.isEqualValue(prevData)) {
      this.updateContentHeight(this.getValue(prevData), this.getValue());
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
  /// #endif

  /// #if WECHAT
  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      if (prevData.items !== data.items || !this.isEqualValue(prevData)) {
        this.updateContentHeight(this.getValue(prevData), this.getValue());
      }
    },
  },

  attached() {
    const current = this.getValue();
    const contentHeight = this.properties.items.map((item, index) => {
      if (current.indexOf(index) >= 0) {
        return '';
      }
      return '0px';
    });
    this.setData({
      hasChange: true,
      contentHeight,
    });

    this._prevData = this.data;
  },
  /// #endif
});
