import { View, Page, InternalData } from 'tsxml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import Picker from '../../../src/Picker/index.axml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({
  list,
  weekList,
  columns,
  pickerVisible,
  defaultValue,
  value,
}: InternalData) => (
  <Page>
    <List header="基础用法">
      <ListItem>
        选择城市
        <Picker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          defaultValue={defaultValue}
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          options={list}
        ></Picker>
      </ListItem>
      <ListItem>
        选择城市（点击蒙层关闭）
        <Picker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          defaultValue={defaultValue}
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          maskClosable
          options={list}
        ></Picker>
      </ListItem>
    </List>
    <List header="受控模式">
      <ListItem>
        选择城市
        <Picker
          slot="extra"
          onOk="handleControlledOk"
          value={value}
          placeholder="请选择"
          title="请选择"
          options={list}
        ></Picker>
      </ListItem>
      <View class="btn-wrapper">
        <AntButton
          inline
          onTap="handleChangeControlled"
          style="margin-right: 8px"
        >
          选择深圳
        </AntButton>
        <AntButton inline onTap="handleClearControlled">
          清空
        </AntButton>
      </View>
    </List>
    <List header="对象用法">
      <ListItem>
        选择日期
        <Picker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          options={weekList}
        ></Picker>
      </ListItem>
    </List>

    <List header="多列复杂类型数据">
      <ListItem>
        请选择时间
        <Picker
          slot="extra"
          placeholder="请选择"
          onVisibleChange="handleTriggerPicker"
          defaultValue="{{['Tues', 'pm']}}"
          title="请选择"
          onOk="handleOk"
          onFormat="formatTime"
          options={columns}
        ></Picker>
      </ListItem>
    </List>

    <AntContainer style="margin-top:20rpx;">
      <List header="多列复杂类型数据">
        <ListItem>
          请选择时间
          <Picker
            slot="extra"
            visible={pickerVisible}
            placeholder="请选择"
            onVisibleChange="handleTriggerControlledPicker"
            defaultValue="{{['Tues', 'pm']}}"
            title="请选择"
            onOk="handleOk"
            onFormat="formatTime"
            options={columns}
          ></Picker>
        </ListItem>
      </List>

      <AntButton size="medium" type="primary" onTap="handleOpenPicker">
        打开 Picker
      </AntButton>
    </AntContainer>
  </Page>
);
