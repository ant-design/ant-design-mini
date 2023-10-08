import { Button, View, TSXMLProps, Slot } from 'tsxml';
import Icon from '../Icon/index.axml';
import Loading from '../Loading/index.axml';
import utils from './index.sjs';
import { IButtonProps } from './props';

export default ({
  formType,
  loading,
  type,
  activeClassName,
  scope,
  onTap,
  catchTap,
  publicId,
  openType,
  inline,
  size,
  danger,
  disabled,
  className,
  style,
  icon,
  subText,
}: TSXMLProps<IButtonProps>) => (
  <Button
    form-type={formType}
    hover-class={utils.getHoverClass(loading, type, activeClassName)}
    scope={scope}
    /// #if ALIPAY
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
    /// #endif
    onGetAuthorize="onGetAuthorize"
    onFollowLifestyle="onFollowLifestyle"
    onError="onError"
    onGetUserInfo="onGetUserInfo"
    onGetPhoneNumber="onGetPhoneNumber"
    public-id={publicId}
    open-type={openType}
    class={`ant-button ${
      inline ? 'ant-button-inline ' + utils.getClass(size) : ''
    } ${'ant-button-' + type + (danger ? '-danger' : '')} ${
      disabled || loading ? 'ant-button-disabled' : ''
    } ${className ? className : ''}`}
    style={style}
  >
    <View class="ant-button-wrap">
      {!!icon && <Icon type={icon} />}
      <View
        class={`ant-button-content-text ${
          icon ? 'ant-button-content-text-margin' : ''
        }`}
      >
        <Slot />
        {!inline && subText && (
          <View class="ant-button-content-subtext">{subText}</View>
        )}
      </View>
      {loading && (
        <View class="ant-button-content-loading-container">
          <Loading
            type="mini"
            color="currentColor"
            className="ant-button-content-loading"
          />
        </View>
      )}
    </View>
  </Button>
);
