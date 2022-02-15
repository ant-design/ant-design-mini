/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterDefaultProps } from './props';
import { context } from './context';
import { objectEntries } from '../_util/tools';

type TPlaceholderArray = {
  key: 'placeHolderArray',
  val: Record<string, string>
}
type TActiveArray = {
  key: 'activeArray',
  val: Record<string, boolean>
}
type TCurrentFilterItemId = {
  key: 'currentFilterItemId',
  val: string
}

Component({
  props: FilterDefaultProps,
  data: {
    placeHolderObj: {},
    activeObj: {},
    currentFilterItemId: '',
  },
  didMount() {
    const setGroupDataVal = (val: TPlaceholderArray | TActiveArray | TCurrentFilterItemId) => {
      switch (val.key) {
        case 'placeHolderArray':
          this.setData({
            placeHolderObj: val.val,
          });
          break;
        case 'activeArray':
          this.setData({
            activeObj: { ...this.data.activeObj, ...val.val },
          });
          break;
        case 'currentFilterItemId':
          this.setData({
            currentFilterItemId: val.val,
          });
          break;
        default:
          break;
      }
    };
    const getGroupDataVal = () => this.data.placeHolderObj;

    context.addGroup(this.props.uid);
    context.setGroupDataVal(this.props.uid, setGroupDataVal);
    context.getGroupDataVal(this.props.uid, getGroupDataVal);
    context.updateGroupValue(this.props.uid);
  },

  methods: {
    showFilterItem(e) {
      const group = context.getGroup(this.props.uid);
      if (group) {
        objectEntries(group.items).forEach(([, v]) => {
          if (v.getid() === e.currentTarget.dataset.filterItemId) {
            const show = v.getShow();
            // 记录 filterItem 数据以重置
            if (!show) {
              if (v.isMult()) {
                v.setPrevValue(v.getCurValue());
              }
              v.setShow(!show);
              this.setData({
                currentFilterItemId: `${v.getid()}`,
              });
              return;
            }
            v.setShow(!show);
            this.setData({
              currentFilterItemId: '',
            });
          } else {
            v.getShow() && v.setShow(false);
          }
        });
      }
    },
  },
});
