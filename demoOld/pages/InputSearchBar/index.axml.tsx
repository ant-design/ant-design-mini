import { View } from 'tsxml';
import AntInput from '../../../src/Input/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default () => (
  <View class="container">
    <AntInput
      placeholder="请输入内容"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
      onConfirm="onConfirm"
    >
      <AntIcon slot="prefix" type="SearchOutline" />

      <AntIcon slot="suffix" type="AudioOutline" />
    </AntInput>
    <View class="cancel">取消</View>
  </View>
);
