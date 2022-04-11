import { TabItemDefaultProps } from './props';
import { log } from '../../_util/console';
import { objectValues } from '../../_util/tools';
import { compareVersion } from '../../_util/compareVersion';
import { tabsStore } from "../../_util/tabsStore";

const isBaseSwiper = compareVersion('2.0.0', my.SDKVersion) < 0 ? true : false
Component({
  props: TabItemDefaultProps,
  data: {
    isBaseSwiper,
    fallback: false
  },
  didMount() {
    // 更新 fallback 值
    console.log(this.props.tab)
    const setFallback = (v: boolean) => this.setData({ fallback: v });
    // 注册 item
    const getTabsItemVal = () => this.props.tab
    tabsStore.addItem(this.props.uid, `${this.$id}`, {setFallback, getTabsItemVal});
    // 更新视图
    // console.log(tabsStore)
    this.update()
  },
  didUpdate() {
    // 更新视图
    this.update()
  },
  didUnmount() {
    tabsStore.removeItem(this.props.uid, `${this.$id}`)    
    console.log(tabsStore)
  },
  methods: {
    _tabError(tab) {
      // 检测 tab-item 中的 tab 属性值正确性
      if (!tab || typeof tab !== 'object') {
        log.error('TabItem', `tab 中存有数据类型错误，应为 object，当前的 tab 属性值类型为 ${typeof tab}，值：${tab}`);
      } else if (!tab?.title) {
        log.error('TabItem', `tab 的值中缺少关键 title 值，当前的 tab 值为 ${JSON.stringify(tab)}`);
      }
    },
    update(){
      const group  = tabsStore.getGroup(this.props.uid)
      if(group && group.setGroupDataVal) group.setGroupDataVal()
    }
  },
});
