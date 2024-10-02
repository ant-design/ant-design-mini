/**
 * bash 选项卡切换组件
 */
import { useMemo, FC, useCallback, useContext } from 'react';
import { Tabs } from 'antd';
import { type Language } from 'prism-react-renderer';
import type { TabsProps } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';
import type { ThemeName } from '../../common/ThemeSwitch';

export interface TabItemsType {
  key?: string;
  children?: string | undefined;
  label?: string;
  iconSrc?: string;
  iconRender?: FC<{ theme: ThemeName[] }>;
  lang?: Language;
}

interface BashTabsProps {
  /** tab 配置项 */
  tabItems?: TabItemsType[];
  /** 默认 tab key */
  defaultActiveKey?: string;
}

const BashTabs: FC<BashTabsProps> = (props) => {
  const { tabItems, defaultActiveKey } = props;
  const { theme } = useContext<SiteContextProps>(SiteContext);

  const renderLabel = useCallback(
    (item: TabItemsType) => {
      const { label, iconRender, iconSrc } = item;
      return (
        <span className="snippet-label">
          {typeof iconRender === 'function' ? iconRender({ theme }) : null}
          {iconSrc ? <img src={iconSrc} alt="iconSrc" /> : null}
          {label}
        </span>
      );
    },
    [theme]
  );

  const items: TabsProps['items'] = useMemo(() => {
    return tabItems
      ?.map((item) => {
        const { key = String(Date.now()), children, lang = 'bash' } = item;
        if (children) {
          return {
            key,
            children: <SourceCode lang={lang}>{children}</SourceCode>,
            label: renderLabel(item)
          };
        }
        return {
          key: '',
          label: ''
        };
      })
      .filter((i) => i.key);
  }, [tabItems, renderLabel]);

  return <Tabs className="antd-site-snippet" defaultActiveKey={defaultActiveKey} items={items} />;
};

export default BashTabs;
