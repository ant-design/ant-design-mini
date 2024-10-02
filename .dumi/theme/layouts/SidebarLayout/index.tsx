import { css } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import CommonHelmet from '../../common/CommonHelmet';
import Content from '../../slots/Content';
import Sidebar from '../../slots/Sidebar';

const useStyle = () => {
  return {
    mainWrap: css`
      display: flex;
      flex: 1;
      margin-top: 40px;
    `
  };
};

const SidebarLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const style = useStyle();
  return (
    <main css={style.mainWrap}>
      <CommonHelmet />
      <Sidebar />
      <Content>{children}</Content>
    </main>
  );
};

export default SidebarLayout;
