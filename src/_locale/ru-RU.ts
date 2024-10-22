import type { Locale } from '.';

const ruRU: Locale = {
  // locales for all components
  global: {
    placeholder: '请选择俄语',
    emptyText: '暂无数据',
    okText: '确定',
    cancelText: '取消',
  },
  Calendar: {
    weekdayNames: ['一', '二', '三', '四', '五', '六', '日'],
    title: 'YYYY年MM月',
    today: '今日',
    start: '开始',
    end: '结束',
    startAndEnd: '开始/结束',
  },
  // TODO 部分可以优化成global数据
  RangePicker: {
    // okText: '确定',
    // cancelText: '取消',
    // placeholder: '请选择',
    precision: 'day',
    splitCharacter: '-',
    startPlaceholder: '未选择',
    endPlaceholder: '未选择',
  },
  GuideTour: {
    gotItText: '知道了',
    nextStepText: '下一步',
    prevStepText: '上一步',
    jumpText: '跳过',
  },
  ImageUpload: {
    uploadingText: '上传中',
    uploadfailedText: '上传失败',
  },
  PageContainer: {
    failed: {
      title: '页面遇到一些小问题',
      message: '待会来试试',
    },
    disconnected: {
      title: '网络有点忙',
      message: '动动手指帮忙修复',
    },
    empty: {
      title: '这里什么也没有',
      message: '看看其它吧',
    },
    busy: {
      title: '前方拥堵',
      message: '刷新试试',
    },
  },
};

export default ruRU;
