import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { PopoverDefaultProps } from './props';
import mixinValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { getPopoverStyle } from './utils';
import get from '../_util/get';

Component(
  PopoverDefaultProps,
  {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    onTapItem(e) {
      this.props.onTapItem(e, get(e, 'currentTarget.dataset.item', {}));
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
      if (
        !this.getValue() &&
        e.target.id &&
        e.target.id.indexOf('ant-popover-list-') === 0
      ) {
        return;
      }
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'visibleChange', value, e);
    },
  },
  {
    adjustedPlacement: '',
    popoverContentStyle: '',
  },
  [
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
  {
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
  }
);
