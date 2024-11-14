import { CardDefaultProps } from './props';

Component({
  props: CardDefaultProps,
  data: {
    finalFoldStatus: false,
  },
  onInit() {
    const { foldStatus, config } = this.props;
    this.setData({
      finalFoldStatus: foldStatus,
      finalConfig: {
        ...CardDefaultProps.config,
        ...config,
      },
    });
  },
  didUpdate(prevProps) {
    const { foldStatus } = this.props;
    if (prevProps.foldStatus !== foldStatus) {
      this.setData({
        finalFoldStatus: foldStatus,
      });
    }
  },
  methods: {
    // 点击展开收起按钮
    handleTapFoldBtn() {
      const { finalConfig = {}, finalFoldStatus } = this.data;
      if (finalConfig.foldTapArea === 'btn') {
        this.setData({
          finalFoldStatus: !finalFoldStatus,
        });
        this.props.onFoldChange(!finalFoldStatus, this.props);
      }
    },
    // 点击标题整栏
    handleTapCardHeader() {
      const { finalConfig = {}, finalFoldStatus } = this.data;
      if (finalConfig.foldTapArea === 'header' && this.props.needFold) {
        this.setData({
          finalFoldStatus: !finalFoldStatus,
        });
        this.props.onFoldChange(!finalFoldStatus, this.props);
      }
    },
    // 点击更多
    handleTapLink(e) {
      const { onOperateClick } = this.props;
      onOperateClick && onOperateClick(e);
    },
    // 处理title的sticky状态变化
    handleStickyChange(status) {
      const { onTitleSticky } = this.props;
      onTitleSticky && onTitleSticky(status);
    },
  },
});
