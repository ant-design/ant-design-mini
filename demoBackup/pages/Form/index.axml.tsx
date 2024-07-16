import { Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import FormSwitch from '../../../src/Form/FormSwitch/index.axml';
import FormStepper from '../../../src/Form/FormStepper/index.axml';
import FormPicker from '../../../src/Form/FormPicker/index.axml';
import FormDatePicker from '../../../src/Form/FormDatePicker/index.axml';
import FormRangePicker from '../../../src/Form/FormRangePicker/index.axml';
import FormCascaderPicker from '../../../src/Form/FormCascaderPicker/index.axml';
import FormCheckboxGroup from '../../../src/Form/FormCheckboxGroup/index.axml';
import FormRadioGroup from '../../../src/Form/FormRadioGroup/index.axml';
import FormSlider from '../../../src/Form/FormSlider/index.axml';
import FormSelector from '../../../src/Form/FormSelector/index.axml';
import FormUploadImage from '../../../src/Form/FormImageUpload/index.axml';
import FormRate from '../../../src/Form/FormRate/index.axml';
import FormTextarea from '../../../src/Form/FormTextarea/index.axml';
import AntButton from '../../../src/Button/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntToast from '../../../src/Toast/index.axml';

export default ({
  fruitList,
  cityList,
  radioGroupOptions,
  checkboxGroupOptions,
  selectorOptions,
  onUpload,
  toastShow,
}) => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      placeholder="请输入用户名"
      tooltip="用户名说明"
      allowClear
      ref="handleRef"
    />
    <FormInput
      label="密码"
      name="password"
      placeholder="请输入密码"
      allowClear
      ref="handleRef"
    >
      <View slot="tooltip">
        <AntIcon onTap="showToast" type="QuestionCircleOutline" />
      </View>
    </FormInput>
    <FormInput
      label="地址"
      name="address"
      placeholder="请输入地址"
      allowClear
      ref="handleRef"
    />
    <FormSwitch label="选择" name="needDelivery" ref="handleRef" />
    <FormStepper label="数量" name="quantity" ref="handleRef" />
    <FormPicker
      label="水果"
      arrow
      name="fruit"
      options={fruitList}
      ref="handleRef"
    />
    <FormDatePicker label="出生日期" arrow name="birthday" ref="handleRef" />
    <FormRangePicker label="时间范围" arrow name="range" ref="handleRef" />
    <FormCascaderPicker
      label="城市"
      arrow
      options={cityList}
      name="city"
      tooltip="选择城市"
      placeholder="请输入城市"
      ref="handleRef"
    />
    <FormRadioGroup
      label="动物单选"
      name="animalChoose"
      color="red"
      options={radioGroupOptions}
      ref="handleRef"
    />
    <FormCheckboxGroup
      label="蔬菜多选"
      name="fruitChoose"
      options={checkboxGroupOptions}
      ref="handleRef"
    />
    <FormSelector
      label="喜好"
      name="likeChoose"
      options={selectorOptions}
      ref="handleRef"
    />
    <FormSlider label="选择分数" name="slider" showTooltip ref="handleRef" />
    <FormUploadImage
      label="图片"
      name="image"
      onUpload={onUpload ? onUpload : 'onUpload'}
      ref="handleRef"
    />
    <FormTextarea
      label="说明"
      name="description"
      placeholder="请输入说明"
      allowClear
      autoHeight
      ref="handleRef"
    />
    <FormRate label="评分" name="rate" ref="handleRef" />
    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset">重置</AntButton>
    </View>
    <AntToast
      content="密码的自定义 tooltip"
      visible={toastShow}
      onClose="handleCloseToast"
    />
  </Page>
);
