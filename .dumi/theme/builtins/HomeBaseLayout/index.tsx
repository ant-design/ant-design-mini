import { css } from '@emotion/react';
import { Button, Space, Typography } from 'antd';
import { Link, useSearchParams } from 'dumi';
import React, { useContext, type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useLocaleValue from '../../hooks/useLocaleValue';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';
import { IAction, IBannerConfig } from '../../types';
import { isExternalLinks } from '../../utils';
import Features from './components/Features';
import { GroupMask } from './components/Group';

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl:
    'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original',
  bannerImgUrl: ''
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);

  return {
    mainContent: css`
      position: relative;
      text-align: center;
      flex: 1;
    `,
    bannerDisplay: css`
      display: block;
    `,
    bannerDisplayNone: css`
      display: none;
    `,
    titleBase: css`
      h1& {
        font-family: AliPuHui, ${token.fontFamily};
      }
    `,
    title: isMobile
      ? css`
          h1& {
            margin-bottom: ${token.margin}px;
            font-weight: normal;
            font-size: ${token.fontSizeHeading1 + 2}px;
            line-height: ${token.lineHeightHeading2};
          }
        `
      : css`
          h1& {
            margin-bottom: ${token.marginMD}px;
            font-weight: 900;
            font-size: 68px;
          }
        `
  };
};

const HomeBaseLayout: FC = () => {
  const style = useStyle();
  const { token } = useSiteToken();
  const { isMobile, theme } = useContext<SiteContextProps>(SiteContext);
  const { bannerConfig, name } = useAdditionalThemeConfig();
  const actions: IAction[] = useLocaleValue('actions');
  const title = useLocaleValue('title');
  const description = useLocaleValue('description');
  const [searchParams] = useSearchParams();

  // 如果配置了 bannerImgUrl 字段，展示配置图片，否则展示 ant-design 默认 banner 视频
  const { showBanner, bannerImgUrl, bannerMobileImgUrl } = Object.assign(
    bannerConfigDefault,
    bannerConfig
  );

  const bannerContent = bannerImgUrl ? (
    <img src={bannerImgUrl} style={{ width: '100%', maxWidth: '100%' }} alt="" />
  ) : (
    <React.Fragment>
      <div
        style={{
          backgroundImage:
            'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*6d50SboraPIAAAAAAAAAAAAAARQnAQ)',
          flex: 'auto',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '100% 0',
          backgroundSize: 'auto 100%'
        }}
      />

      <video style={{ height: '100%', objectFit: 'contain' }} autoPlay muted loop>
        <source
          src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
          type="video/webm"
        />
        <source
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/file/A*XYYNQJ3NbmMAAAAAAAAAAAAAARQnAQ"
          type="video/mp4"
        />
      </video>

      <div
        style={{
          backgroundImage:
            'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*8ILtRrQlVDMAAAAAAAAAAAAAARQnAQ)',
          flex: 'auto',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '0 0',
          backgroundSize: 'auto 100%',
          marginLeft: -1
        }}
      />
    </React.Fragment>
  );
  return (
    <div css={style.mainContent}>
      {isMobile ? (
        <img
          src={bannerMobileImgUrl}
          style={{
            width: '100%',
            maxWidth: '100%',
            display: `${showBanner ? 'inline-block' : 'none'} `,
            opacity: `${theme.indexOf('dark') > -1 ? '0.8' : 1}`
          }}
          alt=""
        />
      ) : (
        <div
          style={{
            height: bannerConfig ? 'auto' : 320,
            background: '#77C6FF',
            display: `${showBanner ? 'flex' : 'none'} `,
            flexWrap: 'nowrap',
            justifyContent: 'center',
            opacity: `${theme.indexOf('dark') > -1 ? '0.8' : 1}`
          }}
        >
          {bannerContent}
        </div>
      )}
      {/* Image Left Top */}
      <div style={{ position: 'relative' }}>
        <GroupMask
          style={{
            textAlign: 'center',
            paddingTop: token.marginFar - 16,
            paddingBottom: token.marginFarSM
          }}
        >
          {/* Image Left Top */}
          <img
            style={{ position: 'absolute', left: isMobile ? -120 : 0, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            alt="bg"
          />
          {/* Image Right Top */}
          <img
            style={{ position: 'absolute', right: isMobile ? 0 : 120, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
            alt="bg"
          />
          <Typography.Title level={1} css={[style.titleBase, style.title]}>
            {title || name}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: token.fontSizeHeading5,
              lineHeight: token.lineHeightHeading5,
              marginBottom: token.marginMD * 2
            }}
          >
            <div>{description}</div>
          </Typography.Paragraph>
          <Space
            size="middle"
            style={{
              marginBottom: token.marginFar
            }}
          >
            {actions?.map(({ link, text, type }) => {
              return isExternalLinks(link) ? (
                <Button size="large" type={type} href={link} target="_blank" key={link}>
                  {text}
                </Button>
              ) : (
                <Link
                  to={`${link}${link.search(/\?/) === -1 ? '?' : '&'}${searchParams.toString()}`}
                  key={link}
                >
                  <Button size="large" type={type}>
                    {text}
                  </Button>
                </Link>
              );
            })}
          </Space>
          <Features />
        </GroupMask>
      </div>
    </div>
  );
};

export default HomeBaseLayout;
