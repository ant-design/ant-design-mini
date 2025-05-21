import equal from 'fast-deep-equal';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { StickyProps } from './props';

Component({
  props: StickyProps,
  data: {
    headerHeight: 91, // 透明头时的头部高度，单位是px
  },
  methods: {
    initTabsObserver() {
      this.stickyIO
        .relativeTo('.ant-sticky-check')
        .observe('.ant-sticky', (res) => {
          // console.log(res, 'intersectionObserver');
          // console.log(
          //   '相交区域占目标节点的布局区域的比例',
          //   res.intersectionRatio,
          // );
          // console.log('相交区域', res.intersectionRect);
          // console.log('相交区域', res.intersectionRect.height);
          // console.log('参照区域的边界', res.relativeRect);
          // console.log('目标边界', res.boundingClientRect);
          // console.log('时间戳', res.time);
          triggerEvent(this, 'stickyChange', res.intersectionRatio > 0);
        });
    },

    initHeaderHeight(propsHeaderHeight) {
      // 如果外部有传入默认的高度，优先使用外部的高度，则不根据 getSystemInfo 获取
      if (propsHeaderHeight !== undefined) {
        this.setData({ headerHeight: propsHeaderHeight });
        // 拿都拿到了，顺便抛出去
        triggerEvent(this, 'getHeaderHeight', propsHeaderHeight);
      } else {
        my.getSystemInfo().then((res) => {
          const headerHeight =
            (res.statusBarHeight || 47) + (res.titleBarHeight || 44);
          this.setData({ headerHeight });
          // 拿都拿到了，顺便抛出去
          triggerEvent(this, 'getHeaderHeight', propsHeaderHeight);
        });
      }
    },
  },
  /// #if ALIPAY || ALIPAYNATIVE
  onInit() {
    const [transparentTitle, propsHeaderHeight, check] = getValueFromProps(
      this,
      ['transparentTitle', 'headerHeight', 'check']
    );
    // 如果是透明头，高度默认设为一个iPhoneX的默认高度，并通过JSAPI获取实际的高度进行替换
    if (transparentTitle) {
      this.initHeaderHeight(propsHeaderHeight);
    }
    // 考虑到这个还是有点性能开销，用个属性控制
    if (check) {
      this.stickyIO = this.createIntersectionObserver();
      this.initTabsObserver();
    }
  },
  deriveDataFromProps(nextProps) {
    const [sticky, headerHeight] = getValueFromProps(this, [
      'sticky',
      'headerHeight',
    ]);
    if (sticky !== nextProps.sticky) {
      // 考虑到这个还是有点性能开销，用个属性控制
      if (nextProps.check && !this.stickyIO) {
        this.stickyIO = this.createIntersectionObserver();
        this.initTabsObserver();
      }
    }

    if (headerHeight !== nextProps.headerHeight) {
      this.initHeaderHeight(nextProps.headerHeight);
    }
  },

  didUnmount() {
    this.stickyIO && this.stickyIO.disconnect();
  },
  /// #endif
  /// #if WECHAT
  attached() {
    const [transparentTitle, propsHeaderHeight, check] = getValueFromProps(
      this,
      ['transparentTitle', 'headerHeight', 'check']
    );
    // 如果是透明头，高度默认设为一个iPhoneX的默认高度，并通过JSAPI获取实际的高度进行替换
    if (transparentTitle) {
      this.initHeaderHeight(propsHeaderHeight);
    }
    // 考虑到这个还是有点性能开销，用个属性控制
    if (check) {
      this.stickyIO = this.createIntersectionObserver();
      this.initTabsObserver();
    }
  },
  detached() {
    this.stickyIO && this.stickyIO.disconnect();
  },

  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      if (!equal(prevData, data)) {
        const [sticky, headerHeight] = getValueFromProps(this, [
          'sticky',
          'headerHeight',
        ]);
        if (sticky !== data.sticky) {
          // 考虑到这个还是有点性能开销，用个属性控制
          if (data.check && !this.stickyIO) {
            this.stickyIO = this.createIntersectionObserver();
            this.initTabsObserver();
          }
        }

        if (headerHeight !== data.headerHeight) {
          this.initHeaderHeight(data.headerHeight);
        }
      }
    },
  },
  /// #endif
});
