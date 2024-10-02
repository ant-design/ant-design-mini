import React from 'react';
import type { TabItemsType } from '../BashTabs';
import WindowsLogo from './windows';
import MacOSLogo from './macos';
import LinuxLogo from './linux';
import AndroidLogo from './android';
import BashTabs from '../BashTabs';

interface BashOSPlatformProps {
  windows?: string;
  linux?: string;
  macos?: string;
  ios?: string;
  android?: string;
  defaultActiveKey?: string;
}

const BashOSPlatform: React.FC<BashOSPlatformProps> = (props) => {
  const { windows, linux, macos, ios, android, defaultActiveKey = 'windows' } = props;

  const tabItems = React.useMemo<TabItemsType[]>(
    () =>
      [
        {
          key: 'windows',
          children: windows,
          iconRender: WindowsLogo as any,
          label: 'windows'
        },
        {
          key: 'linux',
          children: linux,
          iconRender: LinuxLogo as any,
          label: 'linux'
        },
        {
          key: 'macos',
          children: macos,
          iconRender: MacOSLogo as any,
          label: 'macos'
        },
        {
          key: 'ios',
          children: ios,
          iconRender: MacOSLogo as any,
          label: 'ios'
        },
        {
          key: 'android',
          children: android,
          iconRender: AndroidLogo as any,
          label: 'android'
        }
      ].filter((item) => item.children),
    [windows, linux, macos, ios, android]
  );

  return <BashTabs tabItems={tabItems} defaultActiveKey={defaultActiveKey} />;
};

export default BashOSPlatform;
