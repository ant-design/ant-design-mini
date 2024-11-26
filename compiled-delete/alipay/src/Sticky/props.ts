export interface IStickyProps {
  className: string;
  headerHeight: number;
  sticky: boolean;
  top: string;
  check: boolean;
  transparentTitle: boolean;
  onStickyChange: (status: boolean) => void;
  onGetHeaderHeight: (height: number) => void;
}

export const StickyProps: IStickyProps = {
  className: '',
  headerHeight: undefined, // 从外部传入的 tab header 高度，默认为 undefined
  sticky: true, // 是否需要粘性，某些场景可能需要一会儿吸顶一会儿不吸
  top: '',
  check: false, // 是否需要检查是否吸顶
  transparentTitle: false, // 是否是透明头
  onStickyChange: (status: boolean) => status, // 是否吸附变化时的回调
  onGetHeaderHeight: (height: number) => height, // 获取到header高度时顺便抛出去一份
};
