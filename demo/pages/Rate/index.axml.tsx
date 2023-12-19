import { Component, InternalData, View } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntRate from '../../../src/Rate/index.axml';
import AntStepper from '../../../src/Stepper/index.axml';

export default ({ value }: InternalData) => (
  <Component>
    <AntContainer title="基础用法">
      <AntRate defaultValue={3} onChange="onChange" />
    </AntContainer>

    <AntContainer title="半星">
      <AntRate defaultValue={3.5} allowHalf onChange="onChange" />
    </AntContainer>

    <AntContainer title="清除">
      <AntRate defaultValue={4} onChange="onChange" />
      <View class="description">allowClear: true</View>
      <AntRate defaultValue={4} allowClear={false} onChange="onChange" />
      <View class="description">allowClear: false</View>
    </AntContainer>

    <AntContainer title="只读">
      <AntRate defaultValue={3.5} readonly />
    </AntContainer>

    <AntContainer title="多个count">
      <AntRate defaultValue={5} count={8} />
    </AntContainer>

    <AntContainer title="受控模式">
      <View style="display: flex;justify-content: space-around;">
        <View>
          <AntRate value={value} onChange="handleChange" />

          <View style="margin-top: 8px">
            <AntStepper value={value} min={0} max={5} onChange="handleChange" />
          </View>
        </View>
        <View>
          <AntRate value={value} />
          <View class="description">无 onChange 函数</View>
        </View>
      </View>
    </AntContainer>
  </Component>
);
