import { PopoverDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

let systemInfo;

Component({
  props: PopoverDefaultProps,
  data: {
    adjustedPlacement: '',
  },
  mixins: [
    mixinValue({
      valueKey: 'visible',
      defaultValueKey: 'defaultVisible',
      transformValue(val) {
        const value = val || false;
        const { placement, autoAdjustOverflow } = this.props;
        if (autoAdjustOverflow) {
          if (value) {
            setTimeout(() => {
              my.createSelectorQuery()
                .select(`#amd-popover-content-${this.$id}`)
                .boundingClientRect()
                .exec(async (ret) => {
                  const rect = ret?.[0];
                  let adjustedPlacement = placement;
                  if (rect) {
                    const { left, top, width, height } = rect;
                    if (top < 0) {
                      adjustedPlacement = adjustedPlacement.replace(
                        'top',
                        'bottom'
                      );
                    }
                    if (left < 0) {
                      adjustedPlacement = adjustedPlacement.replace(
                        'left',
                        'right'
                      );
                    }
                    if (!systemInfo) {
                      try {
                        systemInfo = await my.getSystemInfo();
                      } catch (e) {
                        console.warn('getSystemInfo fail');
                      }
                    }
                    if (systemInfo) {
                      if (left + width > systemInfo.windowWidth) {
                        adjustedPlacement = adjustedPlacement.replace(
                          'right',
                          'left'
                        );
                      }
                      if (
                        top + height >
                        systemInfo.windowHeight -
                          systemInfo.titleBarHeight -
                          systemInfo.statusBarHeight
                      ) {
                        adjustedPlacement = adjustedPlacement.replace(
                          'bottom',
                          'top'
                        );
                      }
                    }
                  }
                  this.setData({ adjustedPlacement });
                });
            });
          } else {
            this.setData({ adjustedPlacement: '' });
          }
        }
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
  methods: {
    onVisibleChange() {
      const { onVisibleChange } = this.props;
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }
      if (onVisibleChange) {
        return onVisibleChange(value, fmtEvent(this.props));
      }
    },
  },
});
