/* eslint-disable react/jsx-closing-tag-location */
import { css } from '@emotion/react';
import { Link, useLocale, useLocation, useSiteData } from 'dumi';
import { Fragment, useMemo } from 'react';
import useSiteToken from '../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls, headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;

  return {
    logo: css`
      height: ${headerHeight}px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: ${colorTextHeading};
      font-weight: bold;
      font-size: 18px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      line-height: ${headerHeight}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: ${colorTextHeading};
      }

      ${antCls}-row-rtl & {
        float: right;
        padding-right: 40px;
        padding-left: 0;
      }

      img {
        height: 32px;
        margin-inline-end: 12px;
        vertical-align: middle;

        ${antCls}-row-rtl & {
          margin-right: 0;
          margin-left: 16px;
        }
      }

      @media only screen and (max-width: ${mobileMaxWidth}px) {
        padding-right: 0;
        padding-left: 0;
      }
    `
  };
};

const Logo = () => {
  const { logo } = useStyle();
  const { themeConfig } = useSiteData();
  const { search } = useLocation();
  const locale = useLocale();
  const logImgUrl =
    themeConfig.logo || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  const content = useMemo(
    () => (
      <Fragment>
        {themeConfig.logo !== false && <img alt="logo" src={logImgUrl} />}
        <span style={{ lineHeight: '32px' }}>{themeConfig.name}</span>
      </Fragment>
    ),
    [logImgUrl, themeConfig.name, themeConfig.logo]
  );

  const suffix = 'suffix' in locale ? locale.suffix : '';
  const homePath = `/${suffix ? `index${suffix}` : ''}`;

  return (
    <h1>
      {themeConfig.homeLink && themeConfig.homeLink.startsWith('http') ? (
        <a href={themeConfig.homeLink} css={logo}>
          {content}
        </a>
      ) : (
        <Link to={themeConfig.homeLink || `${homePath}${search}`} css={logo}>
          {content}
        </Link>
      )}
    </h1>
  );
};

export default Logo;
