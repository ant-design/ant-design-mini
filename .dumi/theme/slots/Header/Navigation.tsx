import { MenuFoldOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Player } from '@galacean/effects';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  FormattedMessage,
  Link,
  useLocale,
  useLocation,
  useNavData,
  useSiteData,
} from 'dumi';
import { INavItem } from 'dumi/dist/client/theme-api/types';
import { motion } from 'framer-motion';
import { useCallback, useContext, useEffect, useRef } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useLocaleValue from '../../hooks/useLocaleValue';
import useSiteToken from '../../hooks/useSiteToken';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import { getTargetLocalePath, isExternalLinks } from '../../utils';
import { type IResponsive } from './index';
import { getMoreLinksGroup } from './More';

export interface NavigationProps {
  isMobile: boolean;
  responsive: IResponsive;
}

const useStyle = () => {
  const { token } = useSiteToken();

  const {
    antCls,
    iconCls,
    fontFamily,
    headerHeight,
    menuItemBorder,
    colorPrimary,
  } = token;

  return {
    nav: css`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      border: 0;

      &${antCls}-menu-horizontal {
        border-bottom: none;

        & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
          min-width: (40px + 12px * 2);
          height: ${headerHeight}px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: ${headerHeight}px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: ${menuItemBorder}px;
          }
        }

        & ${antCls}-menu-submenu-title ${iconCls} {
          margin: 0;
        }

        & > ${antCls}-menu-item-selected {
          a {
            color: ${colorPrimary};
          }
        }
      }

      & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
        text-align: center;
      }
    `,
    navItem: css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    newPlayer: css`
      width: 100px;
      height: 100px;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
      pointer-events: none;
    `,
    rightIcon: css`
      margin-left: 8px;
      width: 16px;
      height: 16px;
    `,
    popoverMenuNav: css`
      ${antCls}-menu-item,
      ${antCls}-menu-submenu {
        text-align: left;
      }

      ${antCls}-menu-item-group-title {
        padding-left: 24px;
      }

      ${antCls}-menu-item-group-list {
        padding: 0 16px;
      }

      ${antCls}-menu-item,
      a {
        color: #333;
      }
    `,
  };
};

export default function Navigation({ isMobile, responsive }: NavigationProps) {
  const { pathname, search } = useLocation();
  const { locales } = useSiteData();
  const { github, socialLinks, prefersColor } = useAdditionalThemeConfig();
  const { theme, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);

  // 统一使用 themeConfig.nav，使用 useNavData，当存在自定义 pages 时，会导致 nav 混乱
  const navList = useNavData();
  const locale = useLocale();
  const moreLinks = useLocaleValue('moreLinks');
  const activeMenuItem = pathname.split('/').slice(0, 2).join('/');
  const playerDom = useRef<HTMLDivElement>(null);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (!playerDom.current) return;

    const player = new Player({
      container: playerDom.current,
    });

    const timer1 = setTimeout(() => {
      player.loadScene(
        'https://mdn.alipayobjects.com/mars/afts/file/A*wKDRRKoA9fcAAAAAAAAAAAAADlB4AQ'
      );
      player.play();
      const timer2 = setTimeout(() => {
        player.loadScene(
          'https://mdn.alipayobjects.com/mars/afts/file/A*wKDRRKoA9fcAAAAAAAAAAAAADlB4AQ'
        );
        player.play();
        timers.current.push(timer2);
      }, 10000);
    }, 3000);
    timers.current.push(timer1);
    return () => {
      timers.current.forEach((t) => {
        clearTimeout(t);
      });
      timers.current = [];
    };
  }, []);

  const createMenuItems = (navs: INavItem[]) => {
    const style = useStyle();
    return navs.map((navItem: INavItem) => {
      const linkKeyValue = (navItem.link ?? '')
        .split('/')
        .slice(0, 2)
        .join('/');
      return {
        // eslint-disable-next-line no-nested-ternary
        label: (
          <div css={style.navItem}>
            {navItem.children ? (
              navItem.title
            ) : isExternalLinks(navItem.link) ? (
              <a
                href={`${navItem.link}${search}`}
                target="_blank"
                rel="noreferrer"
              >
                {navItem.title}
              </a>
            ) : (
              <Link to={`${navItem.link}${search}`}>{navItem.title}</Link>
            )}
            {navItem.isNew ? (
              <div ref={playerDom} css={style.newPlayer}></div>
            ) : null}
            {navItem.rightIcon && (
              <motion.div
                style={{ display: 'inline-block' }}
                animate={{
                  rotate: [-5, 5, -5, 5, 0], // 轻微旋转
                  x: [-2, 2, -2, 2, 0], // 轻微水平移动
                  y: [-1, 1, -1, 1, 0], // 轻微垂直移动
                  transition: {
                    duration: 1.0, // 增加持续时间，使晃动更加平滑
                    repeat: Infinity, // 无限循环
                    ease: 'easeInOut', // 使用平滑的缓动函数
                    repeatDelay: 3,
                  },
                }}
              >
                <img css={style.rightIcon} src={navItem.rightIcon} alt="" />
              </motion.div>
            )}
          </div>
        ),
        key: isExternalLinks(navItem.link) ? navItem.link : linkKeyValue,
        children: navItem.children ? createMenuItems(navItem.children) : null,
      };
    });
  };
  const menuItems: MenuProps['items'] = createMenuItems(navList);

  // 获取小屏幕下多语言导航栏节点
  const getLangNode = useCallback(() => {
    if (locales.length < 2) {
      return null;
    }
    if (locales.length === 2) {
      const nextLang = locales.filter((item) => item.id !== locale.id)[0];
      const nextPath = getTargetLocalePath({
        current: locale,
        target: nextLang,
      });
      return {
        label: (
          <a rel="noopener noreferrer" href={nextPath}>
            {nextLang.name}
          </a>
        ),
        key: nextLang.id,
      };
    }
    return {
      label: <span>{locale.name}</span>,
      key: 'multi-lang',
      children: locales
        .filter((item) => item.id !== locale.id)
        .map((item) => {
          const nextPath = getTargetLocalePath({
            current: locale,
            target: item,
          });
          return {
            label: (
              <a rel="noopener noreferrer" href={nextPath}>
                {item.name}
              </a>
            ),
            key: item.id,
          };
        }),
    };
  }, [locale, locales]);

  let additional: MenuProps['items'];
  const additionalItems: MenuProps['items'] = [
    prefersColor.switch
      ? {
          label: (
            <div
              onClick={() => {
                const themeValue = theme.includes('dark') ? 'light' : 'dark';
                updateSiteConfig({ theme: [themeValue] });
              }}
            >
              <FormattedMessage id="app.theme.switch" />
            </div>
          ),
          key: 'theme',
        }
      : null,
    github || socialLinks?.github
      ? {
          label: (
            <a
              rel="noopener noreferrer"
              href={github || socialLinks?.github}
              target="_blank"
            >
              GitHub
            </a>
          ),
          key: 'github',
        }
      : null,
    getLangNode(),
    ...(getMoreLinksGroup(moreLinks) || []),
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = [
      {
        label: <MenuFoldOutlined />,
        key: 'additional',
        children: [...additionalItems],
      },
    ];
  }
  const items: MenuProps['items'] = [
    ...(menuItems ?? []),
    ...(additional ?? []),
  ];
  const menuMode = isMobile ? 'inline' : 'horizontal';
  const style = useStyle();
  return (
    <Menu
      items={items}
      mode={menuMode}
      css={style.nav}
      selectedKeys={[activeMenuItem]}
      disabledOverflow
    />
  );
}
