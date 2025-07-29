import mixinValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { PopoverDefaultProps } from './props';
import { getPopoverStyle } from './utils';

Component({
  props: PopoverDefaultProps,
  data: {
    adjustedPlacement: '',
    popoverContentStyle: '',
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    onTapItem(e) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'tapItem', item, e);
    },
    async updatePopover() {
      const [placement, autoAdjustOverflow] = getValueFromProps(this, [
        'placement',
        'autoAdjustOverflow',
      ]);
      const [containerRect, childrenRect, contentRect, systemInfo] =
        await Promise.all([
          getInstanceBoundingClientRect(
            this.getInstance(),
            `#ant-popover-list-children${this.$id ? `-${this.$id}` : ''}`
          ),
          getInstanceBoundingClientRect(
            this.getInstance(),
            this.$id
              ? `#ant-popover-list-children-${this.$id} > *`
              : `#ant-popover-list-children-container`
          ),
          getInstanceBoundingClientRect(
            this.getInstance(),
            this.$id
              ? `#ant-popover-list-content-${this.$id}`
              : '#ant-popover-list-content'
          ),
          getSystemInfo(),
        ]);

      const { popoverContentStyle, adjustedPlacement } = getPopoverStyle(
        placement,
        autoAdjustOverflow,
        {
          containerRect,
          childrenRect,
          contentRect,
          systemInfo,
        }
      );

      this.setData({
        popoverContentStyle,
        adjustedPlacement,
      });
    },

    onVisibleChange(e) {
      /// #if ALIPAY
      if (
        !this.getValue() &&
        e.target.id &&
        e.target.id.indexOf('ant-popover-list-') === 0
      ) {
        return;
      }
      /// #endif
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'visibleChange', value, e);
    },
  },

  mixins: [
    mixinValue({
      valueKey: 'visible',
      defaultValueKey: 'defaultVisible',
      transformValue(value) {
        if (value) {
          this.updatePopover();
        } else {
          this.setData({
            adjustedPlacement: '',
          });
        }
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],

  /// #if ALIPAY
  didUpdate(prevProps) {
    const [placement, autoAdjustOverflow] = getValueFromProps(this, [
      'placement',
      'autoAdjustOverflow',
    ]);
    if (
      (prevProps.placement !== placement ||
        prevProps.autoAdjustOverflow !== autoAdjustOverflow) &&
      this.getValue()
    ) {
      this.updatePopover();
    }
  },
  /// #endif
  /// #if WECHAT
  observers: {
    'placement, autoAdjustOverflow, mixin': function () {
      if (this.getValue()) {
        this.updatePopover();
      }
    },
  },
  /// #endif
});
