import { alipayForwardCatchEvent, alipayForwardEvent, Component, IPlatformEvent } from '../../_util/simply';
import { IListItemProps } from './props';


Component<IListItemProps>({
  image: '',
  title: '',
  brief: '',
  arrow: null,
  extra: '',
  extraBrief: '',
  disabled: false,
  showDivider: true,
}, {
  onTap(e: IPlatformEvent) {
    const props = this.props || this.properties;
    if (props.disabled) {
      return;
    }
    alipayForwardEvent(this, 'tap', e);
  },
  catchTap(e: IPlatformEvent) {
    const props = this.props || this.properties;
    if (props.disabled) {
      return;
    }
    alipayForwardCatchEvent(this, 'tap', e);
  }
})