import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ClassNames, css } from '@emotion/react';
import type { MenuProps } from 'antd';
import type { MenuItemType } from 'antd/lib/menu/hooks/useItems';
import type { ReactElement } from 'react';
import React, { useContext, useMemo } from 'react';
import useMenu from '../hooks/useMenu';
import useSiteToken from '../hooks/useSiteToken';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

const useStyle = ({ isShowSim }) => {
  const { token } = useSiteToken();

  const { colorSplit, iconCls, fontSizeIcon } = token;

  return {
    prevNextNav: css`
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid ${colorSplit};
      display: flex;

      padding: ${isShowSim ? '0 412px 32px 64px' : '0 164px 32px 64px'};

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
    pageNav: `
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      ${iconCls} {
        color: #999;
        font-size: ${fontSizeIcon}px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `,
    prevNav: `
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-item: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `,
    nextNav: `
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-inline-start: 1em;
        margin-bottom: 1px;
        vertical-align: middle;
        line-height: 0;
        left: 0;
        transition: left 0.3s;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `,
  };
};

const flattenMenu = (
  menuItems: MenuProps['items']
): MenuProps['items'] | null => {
  if (Array.isArray(menuItems)) {
    return menuItems.reduce<Exclude<MenuProps['items'], undefined>>(
      (acc, item) => {
        if (!item) {
          return acc;
        }
        if ('children' in item && item.children) {
          return acc.concat(flattenMenu(item.children) ?? []);
        }
        return acc.concat(item);
      },
      []
    );
  }
  return null;
};

const PrevAndNext: React.FC<{ rtl: boolean; isShowSim?: boolean }> = ({
  rtl,
  isShowSim,
}) => {
  const styles = useStyle({ isShowSim });

  const beforeProps = { className: 'footer-nav-icon-before' };
  const afterProps = { className: 'footer-nav-icon-after' };

  const before = rtl ? (
    <RightOutlined {...beforeProps} />
  ) : (
    <LeftOutlined {...beforeProps} />
  );
  const after = rtl ? (
    <LeftOutlined {...afterProps} />
  ) : (
    <RightOutlined {...afterProps} />
  );

  const [menuItems, selectedKey] = useMenu({ before, after });

  const { isMobile } = useContext<SiteContextProps>(SiteContext);

  const [prev, next] = useMemo(() => {
    const flatMenu = flattenMenu(menuItems);
    if (!flatMenu) {
      return [null, null];
    }
    let activeMenuItemIndex = -1;
    flatMenu.forEach((menuItem, i) => {
      if (menuItem && menuItem.key === selectedKey) {
        activeMenuItemIndex = i;
      }
    });
    return [
      flatMenu[activeMenuItemIndex - 1] as MenuItemType,
      flatMenu[activeMenuItemIndex + 1] as MenuItemType,
    ];
  }, [menuItems, selectedKey]);

  if (isMobile) {
    return null;
  }

  return (
    <section css={styles.prevNextNav}>
      <ClassNames>
        {({ css: classCss, cx }) => (
          <>
            {prev &&
              React.cloneElement(prev.label as ReactElement, {
                className: cx(
                  classCss(styles.pageNav),
                  classCss(styles.prevNav)
                ),
              })}
            {next &&
              React.cloneElement(next.label as ReactElement, {
                className: cx(
                  classCss(styles.pageNav),
                  classCss(styles.nextNav)
                ),
              })}
          </>
        )}
      </ClassNames>
    </section>
  );
};

export default PrevAndNext;
