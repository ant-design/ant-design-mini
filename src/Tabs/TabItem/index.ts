import { TabItemDefaultProps } from './props';
import { getTabArray, componentContext, componentContextFallback } from '../context';
import { log } from '../../_util/console';
import { objectValues } from '../../_util/tools';
import { compareVersion } from '../../_util/compareVersion';

let n = 0;
const isBaseSwiper = compareVersion('2.0.0', my.SDKVersion) < 0 ? true :false
Component({
  props: TabItemDefaultProps,
  data: {
    isBaseSwiper,
    fallback: false
  },
  didMount() {
    this._getTabInfo('didMount');
    componentContextFallback.onUpdate(v => {
      this.setData({
        fallback: v
      })
    })
  },
  didUpdate() {
    this._getTabInfo();
  },
  didUnmount() {
    delete getTabArray[this.uid];
    setTimeout(() => {
      componentContext.update(objectValues(getTabArray));
    }, 0);
  },
  methods: {
    _tabError(tab) {
      // 检测 tab-item 中的 tab 属性值正确性
      if (!tab || typeof tab !== 'object') {
        log.error('TabItem', `tab 中存有数据类型错误，应为 object，当前的 tab 属性值类型为 ${typeof tab}，值：${tab}`);
      } else if (!tab?.title) {
        log.error('TabItem', `tab 的值中缺少关键 title 值，当前的 tab 值为 ${JSON.stringify(tab)}`);
      }
      if (tab?.badge && typeof tab?.badge !== 'number') {
        log.error('TabItem', `tab 中的 badge 类型不匹配，当前的 badge 值为 ${tab?.badge}， 类型为 ${typeof tab?.badge}`);
      }
    },
    _getTabInfo(lifeCycle?: string) {
      // 获取每个 tab-item 中的 tab 值
      // 如果是 didMount 时对 uid 的值做累加处理
      if (lifeCycle === 'didMount') {
        this.uid = n++;
      }
      const { tab } = this.props;
      this._tabError(tab);
      getTabArray[this.uid] = tab;
      setTimeout(() => {
        componentContext.update(objectValues(getTabArray));
      }, 0);
    },
  },
});
