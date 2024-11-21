import { CalendarOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, message, Space, Typography } from 'antd';
import classNames from 'classnames';
import DayJS from 'dayjs';
import { useIntl, useMatchedRoute, useRouteMeta } from 'dumi';
import React, { useContext, useEffect, useMemo } from 'react';
import EditLink from '../../common/EditLink';
import LastUpdated from '../../common/LastUpdated';
import PrevAndNext from '../../common/PrevAndNext';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../SiteContext';
import DocAnchor from './DocAnchor';
import InViewSuspense from './InViewSuspense';

const useStyle = ({ isOverview, isShowSim }) => {
  const { token } = useSiteToken();
  const { antCls } = token;

  return {
    contributorsList: css`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;

      a,
      ${antCls}-avatar + ${antCls}-avatar {
        margin-bottom: 8px;
        margin-inline-end: 8px;
      }
    `,
    toc: css`
      ${antCls}-anchor {
        ${antCls}-anchor-link-title {
          font-size: 12px;
        }
      }
    `,
    tocWrapper: css`
      position: absolute;
      top: 8px;
      right: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 8px 8px 4px;
      backdrop-filter: blur(8px);
      border-radius: ${token.borderRadius}px;
      box-sizing: border-box;

      .toc-debug {
        color: ${token['purple-6']};

        &:hover {
          color: ${token['purple-5']};
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      &.rtl {
        right: auto;
        left: 20px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
    articleWrapper: css`
      padding: ${isOverview
        ? '0 64px 32px 64px'
        : isShowSim
        ? '0 412px 32px 64px'
        : '0 164px 32px 64px'};
      flex: 1;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        &,
        &.rtl {
          padding-right: 24px;
          padding-left: 24px;
        }
      }
    `,
    bottomEditContent: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      flex: 0;
    `,
    colContent: css`
      display: flex;
      flex-direction: column;
    `,
  };
};

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isOverview =
    window.location.pathname === '/components/overview' ||
    window.location.pathname === '/components/overview-en';

  const matchedRoute = useMatchedRoute();

  const isShowSim = useMemo(() => {
    return matchedRoute?.meta?.frontmatter?.nav?.path === '/components';
  }, [matchedRoute]);

  const meta = useRouteMeta();
  const styles = useStyle({ isOverview, isShowSim });
  const { direction, platform, updateSiteConfig } = useContext(SiteContext);

  const debugDemos = useMemo(
    () =>
      meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta]
  );

  const isShowTitle = useMemo(() => {
    const title = meta.frontmatter?.title || meta.frontmatter.subtitle;
    if (!title) return false;

    // 避免 markdown 里有 h1 导致双标题
    const firstToc = meta.toc[0];
    if (firstToc && firstToc.depth === 1) return false;

    return true;
  }, [meta.frontmatter?.title, meta.frontmatter.subtitle, meta.toc]);

  const isRTL = direction === 'rtl';

  const intl = useIntl();

  // 不支持平台提示
  useEffect(() => {
    if (
      Array.isArray(meta.frontmatter.supportPlatform) &&
      !meta.frontmatter.supportPlatform.includes(platform)
    ) {
      const warningText = intl.formatMessage({
        id: 'app.platform.support.warning',
      });
      const platformText = intl.formatMessage({
        id: `app.theme.sidebar.${platform}`,
      });
      message.open({
        type: 'warning',
        content: warningText.replaceAll('${platform}', platformText),
      });

      updateSiteConfig({
        platform: meta.frontmatter.supportPlatform[0],
      });
    }
  }, [meta.frontmatter.supportPlatform, platform, updateSiteConfig, intl]);

  return (
    <Col
      xxl={20}
      xl={19}
      lg={18}
      md={18}
      sm={24}
      xs={24}
      css={styles.colContent}
    >
      {!!meta.frontmatter.toc && !isShowSim && !isOverview && (
        <InViewSuspense fallback={null}>
          <DocAnchor debugDemos={debugDemos} />
        </InViewSuspense>
      )}
      <article
        css={styles.articleWrapper}
        className={classNames({ rtl: isRTL })}
      >
        {isShowTitle ? (
          <Typography.Title
            style={{
              fontSize: 30,
            }}
          >
            {meta.frontmatter?.title}
            {meta.frontmatter.subtitle && (
              <span
                style={{
                  marginLeft: 12,
                }}
              >
                {meta.frontmatter.subtitle}
              </span>
            )}
          </Typography.Title>
        ) : null}

        {/* 添加作者、时间等信息 */}
        {meta.frontmatter.date || meta.frontmatter.author ? (
          <Typography.Paragraph
            style={{
              opacity: 0.65,
            }}
          >
            <Space>
              {meta.frontmatter.date && (
                <span>
                  <CalendarOutlined />
                  {DayJS(meta.frontmatter.date).format('YYYY-MM-DD')}
                </span>
              )}
              {meta.frontmatter.author &&
                (meta.frontmatter.author as string)
                  ?.split(',')
                  ?.map((author) => (
                    <Typography.Link
                      href={`https://github.com/${author}`}
                      key={author}
                      target="_blank"
                    >
                      {`@${author}`}
                    </Typography.Link>
                  ))}
            </Space>
          </Typography.Paragraph>
        ) : null}
        {children}
      </article>
      {!isOverview ? (
        <>
          <div
            css={css`
              ${styles.articleWrapper}
              ${styles.bottomEditContent}
            `}
          >
            <LastUpdated time={meta.frontmatter?.lastUpdated} />
            <EditLink />
          </div>
          <PrevAndNext rtl={isRTL} isShowSim={isShowSim} />
        </>
      ) : null}
    </Col>
  );
};

export default Content;
