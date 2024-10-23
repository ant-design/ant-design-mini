import { css } from '@emotion/react';
import { useContext, type FC } from 'react';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';

import Banner from './components/Banner';
import Users from './components/Users';
import Gallery from './components/Gallery';
import Theme from './components/Theme';
import Frame from './components/Frame';
import Notice from './components/Notice';

const useStyle = () => {
  return {
    mainContent: css`
      position: relative;
      text-align: center;
      flex: 1;
      padding-top: 64px;
    `,
  };
};

const HomeBaseLayout: FC = () => {
  const style = useStyle();
  const siteConfig = useContext<SiteContextProps>(SiteContext);

  return (
    <div css={style.mainContent}>
      {/* 公告 */}
      <Notice
        config={siteConfig}
      />
      {/* 顶部 Banner */}
      <Banner
        config={siteConfig}
      />
      {/* 谁在使用 */}
      <Users
        config={siteConfig}
      />
      {/* 组件模块 */}
      <Gallery
        config={siteConfig}
      />
      {/* 主题和多语言模块 */}
      <Theme
        config={siteConfig}
      />
      {/* 设计语言与研发框架模块 */}
      <Frame
        config={siteConfig}
      />
    </div>
  );
};

export default HomeBaseLayout;
