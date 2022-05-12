
import { FLoatingPanelDefaultProps, SCROLL_POS } from './props'

const ARROW_URL = {
    UP: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAYCAYAAACsnTAAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARaADAAQAAAABAAAAGAAAAAC6nCo2AAACkUlEQVRYCe2Y2U7DMBBF2fdNIBA7iEc+gP9/5QeAJ7YCYhO7QOzck8ZVm7ZJHDuukHql2yyOx+Mbe2bSnp4umhTobboT9kafhtsSZ+Nh73U8FL/j644cOiXKgGa7LG6KCFOPX12ciOfiZ31DqPPQogxpYqsigiBMGlgtF+KZ+J72oO+2UKKMyvE1cVFMroysObFyLsWK+Jr1sI/2skWZkJPr4oIPZ2XjVjwVnzzZa2mmLFFmNBpimADacnCHmw/qizh3DjbadvUpCrbmRMSYajui34YXmUOcG5Ft5gU+RCFGsD0QY8yLV/ZG3tSFmEPs+bHv3tjDRZR+mSKLkE2GG81aX33FPbIyUpbhDz1AtiJrGZtZfZrai4hCWl2J6ToJsglv+EoE8yIrbpwLB5DOqXMQCKGsYCPKiCyTVpdEtowLntWZWEA2aRULTGyadhlEfdlKJp2zxXIhjyi8Nd4ecSPP82kDU8YjBsc8QBTGRiRXEIwZmxeSirRJ+nToWl6wTTIdauNt0BeTFIVragveDqK4oNDSzRgwyBauF4UBt0XXGsMpyGWIYpoHdULWI+C7BntqnT2RoB/BiEJ63RFdUquXdFh1K/cvfhP4SQAuvvM1vitGaRyjAMUJpEVAVD8SD0TKb7ZNKJC5+A6iLsEPikdWkS3QgRX+SEez9IrUBaWU2DhVACZ+Ue+YdG4bBvh4jWBEsSlwSKcVsZSPsapbhX9ZOdQ+0PajtKaBEQUjG2Iacuf5NCMB29jKkBVANqVaNjFUp01gfhFMTEEl9lTyUx/lqQj3RfZtTU2d/xfgMxOmVqISJ1QkxTnWPeYZIdk4qbsEXL5vKLQwFvSvQI1XNpgbq4aYQ9ZhjlGA1bGLdgr8AVixhJETQD/CAAAAAElFTkSuQmCC',
    MIDDLE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAICAYAAABAiVmlAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARKADAAQAAAABAAAACAAAAABd2nb3AAAAfklEQVRIDe2VOwqAMBAFjT9shJzBwhN4/xPY2uYAgpAyiIXzWAvvsHkwuyHdDmQTGstEWyDCaFdu6s2kGRKUQJGMDXrwnIfh946ywuzZxDd7Sx9V9ExqzECUkJqfAQnRQqkxA1lCtF21ULxHDpKWqg4n6LsdQHeeom/3ggPKC984EbDo//HDAAAAAElFTkSuQmCC',
    DOWN: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAYCAYAAABHqosDAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARqADAAQAAAABAAAAGAAAAADpBnGyAAACqElEQVRYCe2XWW/VMBCFS9kEYitL2Tf1CXji//8I3pB4QOxL2SmoCASF76OdyIQbrh0n97aoRzo3uY49GZ+MZ+yFhV1MVGDPhNZjtJ2BB+An+Ap+g/8TnNsyPAqd22u4Bhu0hbnKk+vN082bDS4v4RP4ZbNpx/4ewvPL8BxcbM3iAf8fRVsqzHEab8eDjqvRo0BG0k6CkaEgRsm/cIeHH+2wL+l1OrnvutWwfAcV6D3czljCOQU5memkGvwljOsuF75IGjmP4Rv4E24HuAqc4BVopJSg0WBvMsr1l6tsDDvITUSRuWgdzksgc4a54wa8CPWtFKsMWHNQKoyT0nDaZp8c7KeTX+n8VmdtKdQsYDpQiFvwLNSXPrA63YO//U6Tr8aMmpuwNAQdm+I7f55tcaxSb9griExzJX+LYUq4C5uq2xZGi7adgq5R9zQ1UP0X8ClsXlpjkLF+vEvQ6GyXXJqK4LIxR76Ff6SAScKklk/wR4FKc09qw3tf6iZKJz7DPjjCIH1x8znN72n2rar68qGrY+4LwqnlLkMF7VOdatka6uNo1n1Y1sfJFSZ8NYy7do7RJ/faGcYY0K8hl3Pxzr1UmJi0ic91fgHWJj4rmF/RrymMSpfMYf9UwALwHJrfigtAX2HCX0VRHEVqNkfxsPDqRESt0IqgGIoSNrktQ60w8bZFbtxD+KVdbvOAVc/IW4UbtQ4MJUz4ob2+2/GwUXod5VgytDDppDzAGUFex4AHWCNklIPsmMKEGO6iFcj9xxCI/ZCRMhpmIUw4b+5RIM9jpe91g2jJNUKG2kFjqhulDnZbyn/iqdcqZjWbdmD9QZ8ouV+5nxnmIUxMzrLsAfAabPthhDyEHkR7l1zG9kbbod6GKgZa6ldgJGmT6X1YXXKxsYuhFfgFxaZyhdIRKIEAAAAASUVORK5CYII='
}

Component({
    props: FLoatingPanelDefaultProps,
    data: {
        sys: null,
        height: 0,
        scrollViewHeight: 0,
        // 面板最大高度
        maxHeight: 0,
        // 面板中间高度
        middleHeight: 0,
        // 面板最小高度
        minHeight: 0,
        // scroll-view 是否可以滚动
        scrollY: false,
        arrow: ARROW_URL.UP,
        arrowHeight: 24,
        didMount: false
    },
    async didMount () {
        this.setData({ didMount: true })
        let sys = this.props.systemInfo
        if (!sys) {
            const sys = await this.getSystemInfo()
            this.setData({ sys })
        }
        this.calHeight(sys)
    },
    methods: {
        // 方便sjs调试打印
        console(...arg){
            console.log('console', ...arg)
        },
        async calHeight(sys) {
            sys = sys || this.data.sys;
            if (!sys) return;
            const [headerHeight, footerHeight, listHeight] = await Promise.all([
                this.getWrapperHeight('.amd-swiper-header'),
                this.getWrapperHeight('.amd-swiper-footer'),
                this.getWrapperHeight('.amd-scroll-view-content'),
            ])
            const contentHeight = headerHeight + listHeight + footerHeight;
            let { windowHeight } = sys;
            let maxHeight = windowHeight * (this.props.maxHeight || 0.95)
            // 当内容高度小于 0.95 视窗大小时，缩短面板最大高度
            maxHeight = contentHeight < maxHeight ? contentHeight : maxHeight
            
            let middleHeight = windowHeight * (this.props.middleHeight || 0.35)
            middleHeight = contentHeight < middleHeight ? contentHeight : middleHeight

            let minHeight = windowHeight * (this.props.minHeight || 0.18)
            minHeight = contentHeight < minHeight ? contentHeight : minHeight
            const scrollViewHeight = maxHeight - headerHeight - footerHeight
            this.setData({
                minHeight,
                maxHeight,
                middleHeight,
                scrollViewHeight,
                height: minHeight
            });
        },
        getWrapperHeight(classname = '.swiper-box'): Promise<number> {
            return new Promise(resolve => {
                my.createSelectorQuery()
                .select(classname)
                .boundingClientRect()
                .exec(ret => {
                    const height = ret[0]?.height || 0;
                    resolve(height);
                });
            });
        },
        // 某些机器上发现无法获得 padding-bottom
        // getSafeAreaBottomHeight (): Promise<number> {
        //     return new Promise(resolve => {
        //         my.createSelectorQuery()
        //         .select('.amd-swiper-box')
        //         .fields(
        //             {
        //                 computedStyle: ['padding-bottom'],
        //             },
        //             (res) => {
        //                 const paddingBottom = Number(res['padding-bottom'].replace('px', ''))
        //                 resolve(paddingBottom)
        //             }
        //         )
        //         .exec(res => {
        //             my.alert({ content: res })

        //         });
        //     });
        // },
        getSystemInfo() {
            return new Promise(resolve => {
                my.getSystemInfo({
                    success: res => {
                        resolve(res)
                    }
                })
            });
        },
        disableScrollY(){
            this.setData({ scrollY: false })
        },
        enableScrollY(){
            this.setData({ scrollY: true })
        },
        changeArrow (type) {
            this.setData({
                arrow: ARROW_URL[type],
                arrowHeight: type === 'MIDDLE' ? 8 : 24
            })
        },
        onScrollViewToBottom () {
            this.props.onContentToBottom?.()
        },
        scrollStatus (pos: SCROLL_POS) {
            this.props.onScroll?.(pos)
        }
    }
})