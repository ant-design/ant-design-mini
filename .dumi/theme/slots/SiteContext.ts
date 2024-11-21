import type { DirectionType } from 'antd/lib/config-provider';
import { createContext } from 'react';
import type { ThemeName } from '../common/ThemeSwitch';

export type PlatformName = 'alipay' | 'wechat';

export interface SiteContextProps {
  isMobile: boolean;
  direction: DirectionType;
  theme: ThemeName[];
  platform: PlatformName;
  herboxUrl: string; //  demo 预览模拟器iframe地址
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = createContext<SiteContextProps>({
  isMobile: false,
  direction: 'ltr',
  theme: [],
  platform: 'alipay',
  herboxUrl: '',
  updateSiteConfig: () => {},
});

export default SiteContext;
