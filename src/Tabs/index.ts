import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { TabsDefaultProps } from './props';

Component({
  props: TabsDefaultProps,
  data: {
    /// #if WECHAT
    scrollHeight: 0,
    /// #endif
    scrollLeft: 0,
    scrollTop: 0,
    leftFade: false,
    rightFade: false,
  },
  scrollLeft: 0,
  scrollTop: 0,
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    get$Id() {
      return this.$id ? `-${this.$id}` : '';
    },
    async getBoundingClientRect(query: string) {
      return await getInstanceBoundingClientRect(this.getInstance(), query);
    },
    async updateFade() {
      this.setData({
        leftFade: !!this.scrollLeft,
      });
      const items = getValueFromProps(this, 'items');
      const [view, item] = await Promise.all([
        this.getBoundingClientRect(`#ant-tabs-bar-scroll-view${this.get$Id()}`),
        this.getBoundingClientRect(
          `#ant-tabs-bar-item${this.get$Id()}-${items.length - 1}`
        ),
      ]);
      if (!item || !view) {
        return;
      }
      this.setData({
        rightFade: item.left + item.width / 2 > view.width,
      });
    },
    async updateScroll() {
      const current = this.getValue();
      const [view, item] = await Promise.all([
        this.getBoundingClientRect(`#ant-tabs-bar-scroll-view${this.get$Id()}`),
        this.getBoundingClientRect(
          `#ant-tabs-bar-item${this.get$Id()}-${current}`
        ),
      ]);

      if (!view || !item) {
        return;
      }

      const [direction, scrollMode] = getValueFromProps(this, [
        'direction',
        'scrollMode',
      ]);
      if (direction === 'vertical') {
        let scrollTop = this.scrollTop || 0;
        let needScroll = false;
        if (scrollMode === 'center') {
          needScroll = true;
          scrollTop +=
            item.top - view.top - Math.max((view.height - item.height) / 2, 0);
        } else {
          const distance = item.top - view.top;
          if (distance < 0) {
            scrollTop += distance;
            needScroll = true;
          } else if (distance + item.height > view.height) {
            scrollTop += Math.min(
              distance + item.height - view.height,
              distance
            );
            needScroll = true;
          }
        }
        if (needScroll) {
          if (scrollTop === this.data.scrollTop) {
            scrollTop += Math.random();
          }
          this.setData({
            scrollTop,
          });
        }
        return;
      }
      let scrollLeft = this.scrollLeft || 0;
      let needScroll = false;
      if (scrollMode === 'center') {
        needScroll = true;
        scrollLeft +=
          item.left - view.left - Math.max((view.width - item.width) / 2, 0);
      } else {
        const distance = item.left - view.left;
        if (distance < 0) {
          scrollLeft += distance;
          needScroll = true;
        } else if (distance + item.width > view.width) {
          scrollLeft += Math.min(distance + item.width - view.width, distance);
          needScroll = true;
        }
      }
      if (needScroll) {
        if (scrollLeft === this.data.scrollLeft) {
          scrollLeft += Math.random();
        }
        this.setData({
          scrollLeft,
        });
        this.updateFade();
      }
    },
    async onScroll(e) {
      const direction = getValueFromProps(this, 'direction');
      if (direction === 'vertical') {
        this.scrollTop = e.detail.scrollTop;
        return;
      }
      this.scrollLeft = e.detail.scrollLeft;
      this.updateFade();
    },
    onChange(e) {
      const index = parseInt(e.currentTarget.dataset.index, 10);
      const items = getValueFromProps(this, 'items');
      if (items[index].disabled) {
        return;
      }
      if (this.getValue() === index) {
        return;
      }
      if (!this.isControlled()) {
        this.update(index);
      }

      triggerEvent(this, 'change', index, e);
    },
  },

  mixins: [
    createValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ],

  /// #if ALIPAY
  didMount() {
    this.updateScroll();
  },
  didUpdate(prevProps, prevData) {
    const items = getValueFromProps(this, 'items');
    if (prevProps.items !== items || !this.isEqualValue(prevData)) {
      this.updateScroll();
    }
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.updateScroll();
    this.getBoundingClientRect('.ant-tabs-bar-item').then((res) => {
      const direction = getValueFromProps(this, 'direction');
      if (res && res.height > 0 && direction !== 'vertical') {
        this.setData({
          scrollHeight: res.height,
        });
      } else {
        this.setData({
          scrollHeight: direction === 'vertical' ? 0 : 40,
        });
      }
    });
  },
  observers: {
    'items': function () {
      this.updateScroll();
    },
    'mixin.current': function () {
      this.updateScroll();
    },
  },
  /// #endif
});
