import { InternalData } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import Popover from '../../../src/Popover/index.axml';

export default (_, { visible, url }: InternalData) => (
  <Popover
    placement="bottom-right"
    visible={visible}
    style="display: inline-block; margin: 20px"
    onVisibleChange="handleVisibleChange"
    color="#fff"
  >
    <AntButton inline >
      点我
    </AntButton>
    <List slot="content" className="popover">
      <ListItem onTap="handleTapItem" image="ScanningOutline">
        扫一扫
      </ListItem>

      <ListItem onTap="handleTapItem" image="ReceivePaymentOutline">
        付钱/收钱
      </ListItem>

      <ListItem onTap="handleTapItem" image="TransportQRcodeOutline">
        乘车码
      </ListItem>
      <ListItem onTap="handleTapItem" image={url}>
        图片
      </ListItem>
    </List>
  </Popover>
);
