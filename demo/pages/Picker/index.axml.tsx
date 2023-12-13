import { View, Page, InternalData } from 'tsxml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntPicker from '../../../src/Picker/index.axml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({
  list,
  weekList,
  columns,
  pickerVisible,
  defaultValue,
  value,
  formatTime,
}: InternalData) => (
  <Page>
    <AntList header="基础用法">
      <AntListItem>
        选择城市
        <AntPicker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          defaultValue={defaultValue}
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          options={list}
        ></AntPicker>
      </AntListItem>
      <AntListItem>
        选择城市（点击蒙层不关闭）
        <AntPicker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          defaultValue={defaultValue}
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          maskClosable={false}
          options={list}
        ></AntPicker>
      </AntListItem>
    </AntList>
    <AntList header="受控模式">
      <AntListItem>
        选择城市
        <AntPicker
          slot="extra"
          onOk="handleControlledOk"
          value={value}
          placeholder="请选择"
          title="请选择"
          options={list}
        ></AntPicker>
      </AntListItem>
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
    </AntList>
    <AntList header="对象用法">
      <AntListItem>
        选择日期
        <AntPicker
          slot="extra"
          onCancel="handleDismissPicker"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
          placeholder="请选择"
          title="请选择"
          onChange="handleChange"
          options={weekList}
        ></AntPicker>
      </AntListItem>
    </AntList>

    <AntList header="多列复杂类型数据">
      <AntListItem>
        请选择时间
        <AntPicker
          slot="extra"
          placeholder="请选择"
          onVisibleChange="handleTriggerPicker"
          defaultValue="{{['Tues', 'pm']}}"
          title="请选择"
          onOk="handleOk"
          onFormat={formatTime ? formatTime : 'formatTime'}
          options={columns}
        ></AntPicker>
      </AntListItem>
    </AntList>

    <AntContainer style="margin-top:20rpx;">
      <AntList header="多列复杂类型数据">
        <AntListItem>
          请选择时间
          <AntPicker
            slot="extra"
            visible={pickerVisible}
            placeholder="请选择"
            onVisibleChange="handleTriggerControlledPicker"
            defaultValue="{{['Tues', 'pm']}}"
            title="请选择"
            onOk="handleOk"
            onFormat={formatTime ? formatTime : 'formatTime'}
            options={columns}
          ></AntPicker>
        </AntListItem>
      </AntList>

      <AntButton size="medium" type="primary" onTap="handleOpenPicker">
        打开 Picker
      </AntButton>
    </AntContainer>
  </Page>
);
