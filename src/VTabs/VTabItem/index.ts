import { VTabItemDefaultProps } from './props';
import { getTabArray, componentContext } from '../context';
import { log } from '../../_util/console';
import { objectValues } from '../../_util/tools';

const component2 = my.canIUse('component2');

Component({
  props: VTabItemDefaultProps,
  data: {
    component2,
  },
  didMount() {
    this._getTabInfo();
  },
  didUpdate() {
    this._getTabInfo();
  },
  didUnmount() {
    delete getTabArray[this.$id];
  },
  methods: {
    _tabError(tab) {
      // 检测 tab-item 中的 tab 属性值正确性
      if (!tab || typeof tab !== 'object') {
        log.error('VTabItem', `tab 中存有数据类型错误，应为 object，当前的 tab 属性值类型为 ${typeof tab}，值：${tab}`);
      } else if (!tab?.title) {
        log.error('VTabItem', `tab 的值中缺少关键 title 值，当前的 tab 值为 ${JSON.stringify(tab)}`);
      }
      if (tab?.count && typeof tab?.count !== 'number') {
        log.error('VTabItem', `tab 中的 count 类型不匹配，当前的 count 值为 ${tab?.count}， 类型为 ${typeof tab?.count}`);
      }
    },
    _getTabInfo() {
      // 获取每个 tab-item 中的 tab 值
      // 如果是 didMount 时对 uid 的值做累加处理
      const { tab } = this.props;
      this._tabError(tab);
      getTabArray[this.$id] = tab;
      setTimeout(() => {
        componentContext.update(objectValues(getTabArray));
      }, 0);
    },
  },
});
