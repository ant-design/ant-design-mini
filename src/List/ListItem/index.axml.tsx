import { View, Slot, TSXMLProps, Block } from 'tsxml';
import Icon from '../../Icon/index.axml';
import arrowUtil from '../../_util/arrow.sjs';
import ImageIcon from '../../ImageIcon/index.axml';
import { IListItemProps } from './props';

export default ({
  className,
  style,
  onTap,
  catchTap,
  image,
  showDivider,
  disabled,
  title,
  brief,
  extra,
  extraBrief,
  arrow,
}: TSXMLProps<IListItemProps>) => (
  <View
    class={`ant-list-item  ${className ? className : ''}`}
    style={style || ''}
    /// #if ALIPAY
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
    /// #endif
    hover-class={onTap || catchTap ? 'ant-list-item-hover' : ''}
    hover-start-time={20}
    hover-stay-time={40}
  >
    <View
      class={`ant-list-item-line ${
        showDivider ? 'ant-list-item-line-divider' : ''
      } ${disabled ? 'ant-list-item-line-disabled' : ''}`}
    >
      <View class="ant-list-item-image-container">
        {/* #if WECHAT */}
        {image ? (
          <ImageIcon image={image} className="ant-list-item-image" />
        ) : (
          <Block>
            <Slot name="image"></Slot>
          </Block>
        )}
        {/* #endif */}

        {/* #if ALIPAY */}
        <Slot name="image">
          {/* #endif */}
          {image && <ImageIcon image={image} className="ant-list-item-image" />}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
      <View class="ant-list-item-content-container">
        <View class="ant-list-item-content-title-container">
          {/* #if ALIPAY */}
          <Slot name="title">
            {/* #endif */}
            {title && <View class="ant-list-item-content-title">{title}</View>}
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
        <View class="ant-list-item-content-main">
          <Slot />
        </View>
        <View class="ant-list-item-content-brief-container">
          {/* #if ALIPAY */}
          <Slot name="brief">
            {/* #endif */}

            {brief && <View class="ant-list-item-content-brief">{brief}</View>}
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      </View>
      <View class="ant-list-item-extra-container">
        <View class="ant-list-item-extra">
          {/* #if ALIPAY */}
          <Slot name="extra">{extra}</Slot>
          {/* #endif */}

          {/* #if WECHAT */}
          {extra ? (
            <Block>{extra}</Block>
          ) : (
            <Block>
              <Slot name="extra"></Slot>
            </Block>
          )}
          {/* #endif */}
        </View>
        <View class="ant-list-item-extra-brief">
          {/* #if ALIPAY */}

          <Slot name="extraBrief">
            {/* #endif */}
            {extraBrief}
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      </View>
      <View class="ant-list-item-arrow">
        {arrowUtil.getArrow(arrow) && <Icon type={arrowUtil.getArrow(arrow)} />}
      </View>
    </View>
  </View>
);
