import { View, Slot } from 'tsxml';
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
}: IListItemProps) => (
  <View
    class={`ant-list-item  ${className ? className : ''}`}
    style={style || ''}
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
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
        <Slot name="image">
          {image && <ImageIcon image={image} className="ant-list-item-image" />}
        </Slot>
      </View>
      <View class="ant-list-item-content-container">
        <View class="ant-list-item-content-title-container">
          <Slot name="title">
            {title && <View class="ant-list-item-content-title">{title}</View>}
          </Slot>
        </View>
        <View class="ant-list-item-content-main">
          <Slot />
        </View>
        <View class="ant-list-item-content-brief-container">
          <Slot name="brief">
            {brief && <View class="ant-list-item-content-brief">{brief}</View>}
          </Slot>
        </View>
      </View>
      <View class="ant-list-item-extra-container">
        <View class="ant-list-item-extra">
          <Slot name="extra">{extra}</Slot>
        </View>
        <View class="ant-list-item-extra-brief">
          <Slot name="extraBrief">{extraBrief}</Slot>
        </View>
      </View>
      <View class="ant-list-item-arrow">
        {arrowUtil.getArrow(arrow) && <Icon type={arrowUtil.getArrow(arrow)} />}
      </View>
    </View>
  </View>
);
