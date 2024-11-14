import { StickyProps } from './props';
Component({
    data: {
        headerHeight: 91, // 透明头时的头部高度，单位是px
    },
    props: StickyProps,
    onInit: function () {
        // 如果是透明头，高度默认设为一个iPhoneX的默认高度，并通过JSAPI获取实际的高度进行替换
        if (this.props.transparentTitle) {
            var propsHeaderHeight = this.props.headerHeight;
            this.initHeaderHeight(propsHeaderHeight);
        }
        // 考虑到这个还是有点性能开销，用个属性控制
        if (this.props.check) {
            this.stickyIO = this.createIntersectionObserver();
            this.initTabsObserver();
        }
    },
    deriveDataFromProps: function (nextProps) {
        if (this.props.sticky !== nextProps.sticky) {
            // 考虑到这个还是有点性能开销，用个属性控制
            if (nextProps.check && !this.stickyIO) {
                this.stickyIO = this.createIntersectionObserver();
                this.initTabsObserver();
            }
        }
        if (this.props.headerHeight !== nextProps.headerHeight) {
            this.initHeaderHeight(nextProps.headerHeight);
        }
    },
    methods: {
        initTabsObserver: function () {
            var onStickyChange = this.props.onStickyChange;
            this.stickyIO
                .relativeTo('.ant-sticky-check')
                .observe('.ant-sticky', function (res) {
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
                onStickyChange(res.intersectionRatio > 0);
            });
        },
        initHeaderHeight: function (propsHeaderHeight) {
            var _this = this;
            // 如果外部有传入默认的高度，优先使用外部的高度，则不根据 getSystemInfo 获取
            if (propsHeaderHeight !== undefined) {
                this.setData({ headerHeight: propsHeaderHeight });
                // 拿都拿到了，顺便抛出去
                this.props.onGetHeaderHeight(propsHeaderHeight);
            }
            else {
                my.getSystemInfo().then(function (res) {
                    var headerHeight = (res.statusBarHeight || 47) + (res.titleBarHeight || 44);
                    _this.setData({ headerHeight: headerHeight });
                    // 拿都拿到了，顺便抛出去
                    _this.props.onGetHeaderHeight(headerHeight);
                });
            }
        },
    },
    didUnmount: function () {
        this.stickyIO && this.stickyIO.disconnect();
    },
});
