import { UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, ConfigProvider, Menu } from 'antd';
import { FormattedMessage, useMatchedRoute, useSidebarData } from 'dumi';

import MobileMenu from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useMenu from '../../hooks/useMenu';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../SiteContext';

interface SidebarState {
  mobileMenuVisible: boolean;
}

const SWITCH_HEIGHT = 33;

const PLATFORM_ICON = {
  alipay: {
    default:
      'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*Dk3bQ5d5hmkAAAAAAAAAAAAADtF8AQ/original',
    active:
      'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*9j5oQbJwkTwAAAAAAAAAAAAADtF8AQ/original',
  },
  wechat: {
    default:
      'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*HD4MSp4J_0sAAAAAAAAAAAAADtF8AQ/original',
    active:
      'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*7x3RQKnnTs4AAAAAAAAAAAAADtF8AQ/original',
  },
};

const useStyle = (isShowPlatfromSwitch) => {
  const { token } = useSiteToken();

  const { theme } = useContext(SiteContext);
  const isDark = theme.includes('dark');

  const { antCls, fontFamily, colorSplit } = token;

  const swichHeight = useMemo(
    () => (isShowPlatfromSwitch ? SWITCH_HEIGHT : 0),
    [isShowPlatfromSwitch]
  );

  return {
    asideContainer: css`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      &.ant-menu-inline.ant-menu-inline {
        border-inline-end: none;
      }
      &${antCls}-menu-inline {
        user-select: none;
        ${antCls}-menu-submenu-title h4,
        > ${antCls}-menu-item,
        ${antCls}-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > ${antCls}-menu-item-group > ${antCls}-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: ${colorSplit};
            content: '';
          }
        }

        > ${antCls}-menu-item,
          > ${antCls}-menu-submenu
          > ${antCls}-menu-submenu-title,
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-title,
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-list
          > ${antCls}-menu-item,
          &${antCls}-menu-inline
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-list
          > ${antCls}-menu-item {
          padding-left: 40px !important;

          ${antCls}-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &${antCls}-menu-inline {
          ${antCls}-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            ${antCls}-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          ${antCls}-menu-item-group-list > ${antCls}-menu-item {
            padding-left: 80px !important;

            ${antCls}-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        ${antCls}-menu-item-group:first-of-type {
          ${antCls}-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `,
    mainMenu: css`
      z-index: 1;
      border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
      margin-top: ${isShowPlatfromSwitch ? -40 : 0}px;

      .main-menu-inner {
        position: sticky;
        top: ${token.headerHeight + token.contentMarginTop + swichHeight}px;
        width: 100%;
        height: 100%;
        max-height: calc(
          100vh - ${token.headerHeight + token.contentMarginTop}px
        );
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `,
    mobileMenu: css`
      position: fixed;
      z-index: 2;
      bottom: 100px;
      right: 20px;
      cursor: pointer;
    `,
    swichPlatform: css`
      position: sticky;
      top: ${64 + swichHeight / 2}px;
      // top: 104px;
      z-index: 1;
      padding: 0 30px 20px 30px;
      background: ${isDark ? '#141414' : '#fff'};
      .swich {
        height: ${swichHeight}px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${isDark ? 'rgba(255, 255, 255, 0.04)' : '#e9e9e9'};
        border-radius: 3px;
        padding: 3px;
        .item {
          height: 27px;
          border-radius: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px 0;
          margin-right: 3px;
          width: 100%;
          transition: all 0.5s;
          cursor: pointer;
          user-select: none;
          &:last-of-type {
            margin-right: 0;
          }
          .icon {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            flex-shrink: 0;
          }
          & > span {
            font-size: 14px;
            line-height: 20px;
            color: #999999;
            flex-shrink: 0;
          }
          &.active {
            background: ${isDark ? '#141414' : '#fff'};
            border-radius: 1px;
            & > span {
              font-weight: 500;
              color: ${isDark ? '#fff' : '#1677ff'};
            }
          }
          &.activeWx {
            background: ${isDark ? '#141414' : '#fff'};
            border-radius: 1px;
            & > span {
              font-weight: 500;
              color: ${isDark ? '#fff' : 'rgba(0, 0, 0, 0.88)'};
            }
          }
        }
      }
    `,
  };
};

const Sidebar: FC = () => {
  const [sidebarState, setSidebarState] = useState<SidebarState>({
    mobileMenuVisible: false,
  });
  const sidebarData = useSidebarData();

  const matchedRoute = useMatchedRoute();

  const isShowPlatfromSwitch = useMemo(() => {
    const { pathname } = window.location;
    return (
      pathname.startsWith('/components/') ||
      matchedRoute?.meta?.frontmatter?.nav?.path === '/components' ||
      pathname.startsWith('/copilots/') ||
      matchedRoute?.meta?.frontmatter?.nav?.path === '/copilot' ||
      pathname.startsWith('/form/') ||
      matchedRoute?.meta?.frontmatter?.nav?.path === '/form'
    );
  }, [matchedRoute]);

  const styles = useStyle(isShowPlatfromSwitch);
  const {
    token: { colorBgContainer },
  } = useSiteToken();
  const { theme, isMobile, platform, updateSiteConfig } =
    useContext(SiteContext);
  const [menuItems, selectedKey] = useMenu();

  const isDark = theme.includes('dark');

  const handleShowMobileMenu = useCallback(() => {
    setSidebarState((prev) => ({
      ...prev,
      mobileMenuVisible: true,
    }));
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setSidebarState((prev) => ({
      ...prev,
      mobileMenuVisible: false,
    }));
  }, []);

  useEffect(() => {
    if (isMobile) {
      handleCloseMobileMenu();
    }
  }, [isMobile, handleCloseMobileMenu]);

  const { mobileMenuVisible } = sidebarState;

  const menuChild = (
    <ConfigProvider
      theme={{
        components: {
          Menu: { itemBg: colorBgContainer, darkItemBg: colorBgContainer },
        },
      }}
    >
      <Menu
        items={menuItems}
        inlineIndent={30}
        css={styles.asideContainer}
        mode="inline"
        theme={isDark ? 'dark' : 'light'}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={
          sidebarData
            ?.map(({ title }) => title)
            .filter((item) => item) as string[]
        }
      />
    </ConfigProvider>
  );

  const switchPlatform = useCallback(
    (platform) => {
      updateSiteConfig({
        platform,
      });
    },
    [platform, updateSiteConfig]
  );

  return isMobile ? (
    <React.Fragment>
      <MobileMenu
        key="mobile-menu"
        contentWrapperStyle={{
          width: '300px',
        }}
        open={mobileMenuVisible}
        onClose={handleCloseMobileMenu}
      >
        {menuChild}
      </MobileMenu>
      {(menuItems ?? []).length > 1 ? (
        <div css={styles.mobileMenu} onClick={handleShowMobileMenu}>
          <UnorderedListOutlined />
        </div>
      ) : null}
    </React.Fragment>
  ) : (
    <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24} css={styles.mainMenu}>
      {isShowPlatfromSwitch && (
        <div css={styles.swichPlatform}>
          <div className="swich">
            <div
              className={`item ${platform === 'alipay' && 'active'}`}
              onClick={() => switchPlatform('alipay')}
            >
              <img
                className="icon"
                src={
                  PLATFORM_ICON['alipay'][
                    platform === 'alipay' ? 'active' : 'default'
                  ]
                }
              />
              <span>{<FormattedMessage id="app.theme.sidebar.alipay" />}</span>
            </div>
            <div
              className={`item ${platform === 'wechat' && 'activeWx'}`}
              onClick={() => switchPlatform('wechat')}
            >
              <img
                className="icon"
                src={
                  PLATFORM_ICON['wechat'][
                    platform === 'wechat' ? 'active' : 'default'
                  ]
                }
              />
              <span>{<FormattedMessage id="app.theme.sidebar.wechat" />}</span>
            </div>
          </div>
        </div>
      )}
      <section className="main-menu-inner">{menuChild}</section>
    </Col>
  );
};

export default Sidebar;
