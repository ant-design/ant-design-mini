import { UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, ConfigProvider, Menu } from 'antd';
import { useSidebarData } from 'dumi';
import MobileMenu from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import useMenu from '../../hooks/useMenu';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../SiteContext';

interface SidebarState {
  mobileMenuVisible: boolean;
}

const SWITCH_HEIGHT = 33;

const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls, fontFamily, colorSplit } = token;

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

      .main-menu-inner {
        position: sticky;
        top: ${token.headerHeight + token.contentMarginTop + SWITCH_HEIGHT}px;
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
      margin: 0 30px 30px 30px;
      position: sticky;
      top: ${64 + SWITCH_HEIGHT / 2}px;
      height: ${SWITCH_HEIGHT}px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e9e9e9;
      border-radius: 3px;
      padding: 3px;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 0;
        width: 100%;
        cursor: pointer;
        transition: all 0.5s;
        margin-right: 3px;
        &:last-of-type {
          margin-right: 0;
        }
        & > span {
          font-size: 14px;
          line-height: 20px;
          color: #999999;
        }
        &.active {
          background: #ffffff;
          border-radius: 1px;
          & > span {
            font-weight: 500;
            color: #1877ff;
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
  const styles = useStyle();
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
      <div css={styles.swichPlatform}>
        <div className={`item ${platform === 'alipay' && 'active'}`}>
          <span onClick={() => switchPlatform('alipay')}>支付宝</span>
        </div>
        <div className={`item ${platform === 'wechat' && 'active'}`}>
          <span onClick={() => switchPlatform('wechat')}>微信</span>
        </div>
      </div>
      <section className="main-menu-inner">{menuChild}</section>
    </Col>
  );
};

export default Sidebar;
