/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabsDefaultProps } from './props';
import { log } from '../_util/console';
import { objectValues } from '../_util/tools';
import { compareVersion } from '../_util/compareVersion';
import { IBoundingClientRect } from "../_base";
import { tabsStore } from "../_util/tabsStore";
import fmtEvent from '../_util/fmtEvent';

const canSwipeable = my.canIUse('swiper.disable-touch');
const component2 = my.canIUse('component2');


const isShouldNotCalHeight = component2 && compareVersion(my.SDKVersion, '2.6.4') >= 0;

const isForceUpdate = compareVersion(my.SDKVersion, '2.6.4') >= 0 && compareVersion(my.SDKVersion, '2.7.5') === -1;

const isMoreThan275 = compareVersion(my.SDKVersion, '2.7.5') >= 0;

const isBaseSwiper = compareVersion(my.SDKVersion, '2.0.0') >= 0;

Component({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: TabsDefaultProps,
  data: {
    _tabs: {},
    _leftFade: true,
    _rightFade: true,
    _tabsViewportWidth: 0,
    _scrollLeft: 0,
    _swipeable: false,
    _swipeableIndex: 0,
    _swipeableAnimation: false,
    _tabContentHeight: 0,
    currentIndex: 0,
    component2,
    isBaseSwiper,
    _forceRefreshSwiper: 0,
    _isForceUpdate: isForceUpdate,
  },
  didMount() {
    const setGroupDataVal = () =>{
      const key = `${this.$page.$id}-${this.props.uid}`;
      const group = tabsStore.getGroup(key)
      if(group){
          const items = objectValues(group.items).reduce((prev,cur)=>{
            if(cur) prev.push(cur.getTabsItemVal())
            return prev
          },[])
          this.setData({
            _tabs: items
          })
      }
    }
    const key = `${this.$page.$id}-${this.props.uid}`;
    tabsStore.setGroupDataVal(key, ()=>setTimeout(setGroupDataVal,50));
    setGroupDataVal();
    this.updateTabsItemFallbackVal(this.props.fallback)

    const { index, animation } = this.props;
    this.setData({
      currentIndex: index,
    });

    this._getTabsWidth();
    this._useSwipeable(this.props.swipeable);
    if (typeof index !== 'number') {
      // 如果当前索引值的类型不对给警告提示
      log.error('Tabs', `当前激活的索引值类型非 number 类型，修改当前 index 的 ${typeof index} 类型，以保证展示的正确性。`);
    } else {
      my.createSelectorQuery()
        .select(`#amd-tabs-bar-item-${index}`)
        .boundingClientRect()
        .exec((ret) => {
          if (!ret || !ret[0]) {
            // 当获取到的索引值无法匹配时显示错误提示
            log.error('Tabs', `激活的索引值错误，请确认 ${index} 是否为正确的索引值。`);
            return 
          }

          const { _tabsViewportWidth } = this.data;
          // 正确的索引值在初次加载时高亮展示当前 tab
          // eslint-disable-next-line no-lonely-if
          if ((<IBoundingClientRect>ret[0]).left > _tabsViewportWidth / 2) {
            this.setData({
              _scrollLeft:
                (<IBoundingClientRect>ret[0]).left -
                _tabsViewportWidth / 2 +
                (<IBoundingClientRect>ret[0]).width / 2,
              _leftFade: true,
              _swipeableAnimation: animation,
            });
          } else {
            this.setData({
              _scrollLeft: 0,
              _leftFade: false,
              _swipeableAnimation: animation,
            });
          }

        });
      this._autoHeight(index);
    }

    if (!component2) {
      this.props.onGetRef(this.getRef());
    }
  },
  didUpdate(prevProps, prevData) {
    
    const { index, animation, fallback } = this.props;

    if (prevProps.fallback !== fallback) {
      this.updateTabsItemFallbackVal(fallback)
    }

    if (prevProps.index !== index && prevData.currentIndex === this.data.currentIndex) {
      this._getTabsWidth();

      my.createSelectorQuery()
        .select(`#amd-tabs-bar-item-${index}`)
        .boundingClientRect()
        .exec((ret) => {
          if (!ret || !ret[0]) {
            // 当获取到的索引值无法匹配时显示错误提示
            log.error('Tabs', `激活的索引值错误，请确认 ${index} 是否为正确的索引值。`);
            return;
          }

          let { _tabsViewportWidth } = this.data;
          _tabsViewportWidth = Math.floor(_tabsViewportWidth);
          let left = Math.floor((<IBoundingClientRect>ret[0]).left) + this.data._scrollLeft;
          const width = Math.floor((<IBoundingClientRect>ret[0]).width);

          // 正确的索引值在初次加载时高亮展示当前 tab
          if (this.changeTap) {
            left = this.currentLeft;
            this.changeTap = false;
          }
          if (left > _tabsViewportWidth / 2) {
            this.setData({
              _scrollLeft: left - _tabsViewportWidth / 2 + width / 2,
              _leftFade: true,
              currentIndex: index,
              _swipeableAnimation: animation,
            });
          } else {
            this.setData({
              _scrollLeft: 0,
              _leftFade: false,
              currentIndex: index,
              _swipeableAnimation: animation,
            });
          }

        });
      this._autoHeight(index);
    }
    this._useSwipeable(this.props.swipeable);
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    tabsStore.removeGroup(key);
  },
  methods: {
    updateTabsItemFallbackVal(v: boolean){
      const key = `${this.$page.$id}-${this.props.uid}`;
      const group = tabsStore.getGroup(key)
      if(group){
        objectValues(group.items).forEach(item=>{
          // @ts-ignore
          item.setFallback(v)
        })
      }
    },
    _autoHeight(tabIndex) {
      if (isShouldNotCalHeight) return;
      if (this.props.fallback) return
      // tabItem 自适应高度的处理
      // 获取每个 item-pane 的高度，通过传入当前 tab 的 index 值
      // 动态修改 _tabContentHeight 后在 axml 中插入修改
      my.createSelectorQuery()
        .selectAll(`#amd-tabs-content-${this.$id} .amd-tabs-item-pane`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            this.setData({
              _tabContentHeight: (<IBoundingClientRect>ret[0])[tabIndex]?.height,
            });
          }
        });
    },
    handleSwiperChange(e) {
      const { onChange } = this.props;
      // tab-item 滑动时获取当前的 item 元素
      // 并修改 swiper 的高度以自适应展示
      this.setData({
        currentIndex: e.detail?.current,
        _swipeableIndex: e.detail?.current,
        _swipeableAnimation: true,
      });
      this._autoHeight(e.detail?.current);
      if (onChange) {
        return onChange(e.detail?.current, fmtEvent(this.props, e));
      }
    },
    _useSwipeable(b: boolean) {
      const { swipeable } = this.props;
      if (!component2 && swipeable && !b) {
        log.error('Tabs', '未开启 component2 编译，swipeable 无法使用');
      }
      // 如需使用 swipeable 属性，需要基础库版本 ≥ 1.15.0
      if (!canSwipeable) {
        this.setData({
          _swipeable: true,
        });
        if (!b) {
          log.error('Tabs', '基础库版本需要 1.15.0 及以上才可以使用 swipeable');
        }
      } else {
        this.setData({
          _swipeable: !this.props.swipeable,
        });
      }
    },
    _getTabsWidth() {
      // 获取 tabs 可视区域的宽度
      my.createSelectorQuery()
        .select(`#amd-tabs-bar-scroll-view-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            this.setData({
              _tabsViewportWidth: (<IBoundingClientRect>ret[0]).width,
            });
          }
        });
    },
    onChange(e) {
      const { onChange } = this.props;
      const index = parseInt(e?.currentTarget?.dataset?.index, 10);
      if (this.data._tabs[index]?.disabled) {
        return;
      }
      if (onChange && index !== this.data.currentIndex) {
        this.changeTap = true;
        // 获取当前元素的 offsetLeft 值
        this.currentLeft = e?.currentTarget?.offsetLeft;
        return onChange(index, fmtEvent(this.props, e));
      }
    },
    handleSwiperTouchStart(e) {
      const { onTouchStart } = this.props;
      if (typeof onTouchStart === "function") {
        onTouchStart(e)
      }
    },
    handleSwiperTransition(e) {
      const { onTransition } = this.props;
      if (typeof onTransition === "function") {
        onTransition(e)
      }
    },
    handleAnimationEnd(e) {
      const { onAnimationEnd } = this.props;
      if (typeof onAnimationEnd === "function") {
        onAnimationEnd(e)
      }
    },
    appearLeft() {
      this.setData({
        _leftFade: false,
      });
    },
    disappearLeft() {
      this.setData({
        _leftFade: true,
      });
    },
    appearRight() {
      this.setData({
        _rightFade: false,
      });
    },
    disappearRight() {
      this.setData({
        _rightFade: true,
      });
    },
    getRef() {
      return {
        getCompInstance: () => this,
        updateHeight: (idx: number) => this._autoHeight(idx),
      };
    },
  },
  ref() {
    const updateHeight = isForceUpdate
      ? () => this.setData({ _forceRefreshSwiper: Math.random() })
      : (idx: number) => this._autoHeight(idx);
    return isMoreThan275 ?
      { getCompInstance: () => this }
      :
      {
        getCompInstance: () => this,
        updateHeight,
      };
  },
});
