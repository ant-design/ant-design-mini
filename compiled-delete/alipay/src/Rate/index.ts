import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { RateDefaultProps } from './props';
import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';

Component(
  RateDefaultProps,
  {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    async getRate(clientX: number) {
      const [gutter, count, allowHalf] = getValueFromProps(this, [
        'gutter',
        'count',
        'allowHalf',
      ]);
      const { left, width } = await getInstanceBoundingClientRect(
        this.getInstance(),
        `#ant-rate-container${this.$id ? `-${this.$id}` : ''}`
      );
      const halfRateWidth = (width - (count - 1) * gutter) / count / 2;
      const num = clientX - left;
      let halfRateCount = 0;
      /* eslint-disable no-constant-condition */
      while (true) {
        const val =
          halfRateWidth * halfRateCount +
          gutter * Math.floor(halfRateCount / 2);
        if (halfRateCount >= count * 2 || num <= val) {
          break;
        }
        halfRateCount++;
      }
      const rate = allowHalf
        ? halfRateCount * 0.5
        : Math.ceil(halfRateCount * 0.5);
      return rate;
    },
    async handleStarTap(e) {
      const [readonly, allowClear] = getValueFromProps(this, [
        'readonly',
        'allowClear',
      ]);
      if (readonly) {
        return;
      }
      const { clientX, x } = e.detail;

      const clickX = typeof x === 'number' ? x : clientX;
      const rateValue = this.getValue();
      let rate = await this.getRate(clickX);
      if (rateValue === rate && allowClear) {
        rate = 0;
      }
      if (!this.isControlled()) {
        this.update(rate);
      }
      if (rateValue !== rate) {
        triggerEvent(this, 'change', rate);
      }
    },
    async handleStarMove(e) {
      const [readonly] = getValueFromProps(this, ['readonly']);
      if (readonly) {
        return;
      }
      const { touches } = e;
      const { clientX } = touches[0];
      if (!this.moveRate) {
        this.moveRate = {
          originalRate: this.getValue(),
        };
      }
      const rate = await this.getRate(clientX);
      if (this.moveRate) {
        this.moveRate = {
          ...this.moveRate,
          currentRate: rate,
        };
        if (this.isControlled()) {
          this.setData({ displayValue: rate });
        } else {
          this.update(rate);
        }
      }
    },
    handleStarMoveEnd() {
      const readonly = getValueFromProps(this, 'readonly');
      if (readonly) {
        return;
      }
      if (!this.moveRate) {
        return;
      }

      const { currentRate, originalRate } = this.moveRate;
      this.moveRate = null;
      if (this.isControlled()) {
        this.setData({ displayValue: null });
      }
      if (currentRate !== originalRate) {
        triggerEvent(this, 'change', currentRate);
      }
    },
  },
  { displayValue: null },
  [
    createValue({
      transformValue(value) {
        const allowHalf = getValueFromProps(this, 'allowHalf');
        if (allowHalf) {
          return {
            needUpdate: true,
            value: value % 0.5 !== 0 ? Math.round(value) : value,
          };
        }
        return {
          needUpdate: true,
          value: Math.ceil(value),
        };
      },
    }),
  ]
);
