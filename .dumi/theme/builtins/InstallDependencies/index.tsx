import React from 'react';
import type { TabItemsType } from '../BashTabs';
import NpmLogo from './npm';
import PnpmLogo from './pnpm';
import YarnLogo from './yarn';
import BashTabs from '../BashTabs';

interface InstallProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
  defaultActiveKey?: string;
}

const InstallDependencies: React.FC<InstallProps> = (props) => {
  const { npm, yarn, pnpm, defaultActiveKey = 'npm' } = props;
  const tabItems = React.useMemo<TabItemsType[]>(
    () =>
      [
        {
          key: 'npm',
          children: npm,
          iconRender: NpmLogo as any,
          label: 'npm'
        },
        {
          key: 'yarn',
          children: yarn,
          iconRender: YarnLogo as any,
          label: 'yarn'
        },
        {
          key: 'pnpm',
          children: pnpm,
          iconRender: PnpmLogo as any,
          label: 'pnpm'
        }
      ].filter((item) => item.children),
    [npm, yarn, pnpm]
  );

  return <BashTabs tabItems={tabItems} defaultActiveKey={defaultActiveKey} />;
};

export default InstallDependencies;
