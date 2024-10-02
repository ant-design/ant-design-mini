import { CalendarOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, Space, Typography } from 'antd';
import classNames from 'classnames';
import DayJS from 'dayjs';
import { useRouteMeta } from 'dumi';
import type { FC, ReactNode } from 'react';
import { useMemo, useContext } from 'react';
import PrevAndNext from '../../common/PrevAndNext';
import LastUpdated from '../../common/LastUpdated';
import EditLink from '../../common/EditLink';
import useSiteToken from '../../hooks/useSiteToken';
import Footer from '../Footer';
import SiteContext from '../SiteContext';
import InViewSuspense from './InViewSuspense';
import DocAnchor from './DocAnchor';

const useStyle = () => {
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
      padding: 0 170px 32px 64px;
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
    `
  };
};

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  const meta = useRouteMeta();
  const styles = useStyle();
  const { direction } = useContext(SiteContext);

  const debugDemos = useMemo(
    () => meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
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

  return (
    <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24} css={styles.colContent}>
      {!!meta.frontmatter.toc && (
        <InViewSuspense fallback={null}>
          <DocAnchor debugDemos={debugDemos} />
        </InViewSuspense>
      )}

      <article css={styles.articleWrapper} className={classNames({ rtl: isRTL })}>
        {isShowTitle ? (
          <Typography.Title
            style={{
              fontSize: 30
            }}
          >
            {meta.frontmatter?.title}
            {meta.frontmatter.subtitle && (
              <span
                style={{
                  marginLeft: 12
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
              opacity: 0.65
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
                (meta.frontmatter.author as string)?.split(',')?.map((author) => (
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
      <div
        css={css`
          ${styles.articleWrapper}
          ${styles.bottomEditContent}
        `}
      >
        <LastUpdated time={meta.frontmatter?.lastUpdated} />
        <EditLink />
      </div>
      <PrevAndNext rtl={isRTL} />
      <Footer />
    </Col>
  );
};

export default Content;
