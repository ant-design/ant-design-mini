import utils from './index.sjs';
import { IButtonProps } from './props';
import { Button, View } from 'tsxml';
import Loading from '../Loading/index.axml';
import Icon from '../Icon/index.axml';

export default ({
  formType,
  loading,
  type,
  activeClassName,
  scope,
  onTap,
  onGetAuthorize,
  onFollowLifestyle,
  onError,
  onGetUserInfo,
  onGetPhoneNumber,
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
}: IButtonProps) => (
  <Button
    form-type={formType}
    hover-class={utils.getHoverClass(loading, type, activeClassName)}
    scope={scope}
    onTap={onTap ? 'onTap' : ''}
    onGetAuthorize={onGetAuthorize}
    onFollowLifestyle={onFollowLifestyle}
    onError={onError}
    onGetUserInfo={onGetUserInfo}
    onGetPhoneNumber={onGetPhoneNumber}
    catchTap={catchTap ? 'catchTap' : ''}
    public-id={publicId}
    open-type={openType}
    class={`ant-button ${
      inline ? `ant-button-inline ${utils.getClass(size)}` : ''
    } ${`ant-button-${type}${danger ? '-danger' : ''}`}${
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
