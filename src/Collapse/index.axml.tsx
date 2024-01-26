import { View, Slot, Component } from 'tsxml';
import { TSXMLProps, InternalData } from 'tsxml';
import { ICollapseProps } from './props';
import AntIcon from '../Icon/index.axml';
import utils from './index.sjs';

export default (
  { className, style, items }: TSXMLProps<ICollapseProps>,
  { brief, contentHeight, mixin, $id, hasChange }: InternalData
) => (
  <Component>
    <View class={`ant-collapse ${className ? className : ''}`} style={style}>
      {items.map((item, index) => (
        <View
          class={`ant-collapse-item ${
            utils.isActive(mixin.value, index, item.disabled)
              ? 'ant-collapse-item-active'
              : ''
          } ${item.disabled ? 'ant-collapse-item-disabled' : ''}`}
        >
          <View
            class="ant-collapse-item-title"
            data-active={utils.isActive(mixin.value, index, item.disabled)}
            data-index={index}
            data-id={$id}
            onTap="onChange"
          >
            <View class="ant-collapse-item-line">
              <View class="ant-collapse-item-title-node">
                {/* #if ALIPAY */}
                <Slot
                  name="title"
                  value={item}
                  index={index}
                  current={mixin.value}
                >
                  {/* #endif */}
                  {item.title}
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </View>
              <View class="ant-collapse-item-brief-container">
                <View class="ant-collapse-item-brief-node">
                  {/* #if ALIPAY */}
                  <Slot
                    name="brief"
                    value={item}
                    index={index}
                    current={mixin.value}
                  >
                    {/* #endif */}
                    {brief}
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>

                <View class="ant-collapse-item-title-arrow">
                  {/* #if ALIPAY */}
                  <Slot
                    name="icon"
                    value={item}
                    index={index}
                    current={mixin.value}
                  >
                    {/* #endif */}
                    <AntIcon
                      type={
                        utils.isActive(mixin.value, index, item.disabled)
                          ? 'UpOutline'
                          : 'DownOutline'
                      }
                    />
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
              </View>
            </View>
          </View>
          <View
            class={`ant-collapse-item-content-wrap ${
              hasChange ? 'ant-collapse-item-content-wrap-transition' : ''
            } ant-collapse-item-content-wrap${$id ? '-' + $id : ''}-${index}`}
            onTransitionEnd="resetContentHeight"
            style={utils.getStyleHeight(index, contentHeight, item.disabled)}
            data-index={index}
          >
            <View class="ant-collapse-item-content-container">
              <View
                class={`ant-collapse-item-content ant-collapse-item-content${
                  $id ? '-' + $id : ''
                }-${index}`}
              >
                {/* #if ALIPAY */}
                <Slot
                  name="content"
                  value={item}
                  index={index}
                  current={mixin.value}
                >
                  {/* #endif */}
                  {item.content}
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  </Component>
);
