
import { RateDefaultProps } from './props';
import createValue from '../mixins/value';
import { IBoundingClientRect } from "../_base";

function getBoundingClientRect(selector: string) {
  return new Promise<IBoundingClientRect>((resolve, reject) => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
          return;
        }
        reject();
      });
  });
}


Component({
  props: RateDefaultProps,
  mixins: [createValue({
    transformValue(value) {
      if (this.props.allowHalf) {
        return {
          needUpdate: true,
          value: value % 0.5 !== 0 ? Math.round(value) : value,
        };
      }
      return {
        needUpdate: true,
        value: Math.ceil(value),
      };
    }
  })],
  methods: {
    async handleStarTap(e) {
      if (this.props.readonly) {
        return;
      }
      const { clientX } = e.detail;
      const startTapRate = this.getValue();
      let rate = await this.updateRate(clientX);
      if (startTapRate === rate && this.props.allowClear) {
        rate = 0;
      }
      if (!this.isControlled()) {
        this.update(rate);
      }
      if (startTapRate !== rate && this.props.onChange) {
        this.props.onChange(rate);
      }
    },
    startMoveRate: undefined,
    async handleStarMove(e) {
      if (this.props.readonly) {
        return;
      }
      const { touches } = e
      const { clientX } = touches[0];
      if (typeof this.startMoveRate === 'undefined') {
        this.startMoveRate = this.getValue();
      }
      const rate = await this.updateRate(clientX);
      this.update(rate);
    },
    handleStarMoveEnd() {
      if (this.props.readonly) {
        return;
      }
      if (typeof this.startMoveRate === 'undefined') {
        return;
      }
      const startMoveRate = this.startMoveRate;
      this.startMoveRate = undefined;
      const rate = this.getValue();
      if (this.isControlled()) {
        this.update(startMoveRate);
      }
      if (startMoveRate !== rate && this.props.onChange) {
        this.props.onChange(rate);
      }
    },
    async updateRate(clientX: number) {
      const { gutter, count } = this.props;
      const { left, width } = await getBoundingClientRect(`#ant-rate-container-${this.$id}`);
      const halfRateWidth = ((width - (count - 1) * gutter) / count) / 2;
      const num = clientX - left;
      let halfRateCount = 0;
      /* eslint-disable no-constant-condition */
      while(true) {
        const val = halfRateWidth * halfRateCount + gutter * (Math.floor(halfRateCount / 2));
        if (halfRateCount >= count * 2 || num <= val) {
          break
        }
        halfRateCount++; 
      }
      const rate = this.props.allowHalf ? halfRateCount * 0.5 : Math.ceil(halfRateCount * 0.5);
      return rate;
    }
  },
});
