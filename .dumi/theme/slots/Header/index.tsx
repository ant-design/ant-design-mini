/* eslint-disable import/no-unresolved */
import { MenuOutlined } from '@ant-design/icons';
import { ClassNames, css } from '@emotion/react';
import { Col, Popover, Row, Select } from 'antd';
import classNames from 'classnames';
import { useLocale, useLocation } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import LangSwitch from 'dumi/theme/slots/LangSwitch';
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  type FC,
} from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import HeaderExtra from './HeaderExtral';
import Logo from './Logo';
import More from './More';
import Navigation from './Navigation';

interface HeaderState {
  windowWidth: number;
  menuVisible: boolean;
}
export type IResponsive = null | 'narrow' | 'crowded';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

const colPropsHome = [
  {
    flex: 'none',
  },
  {
    flex: 'auto',
  },
];
const _colProps = [
  {
    xxl: 4,
    xl: 5,
    lg: 6,
    md: 6,
    sm: 24,
    xs: 24,
  },
  {
    xxl: 20,
    xl: 19,
    lg: 18,
    md: 18,
    sm: 0,
    xs: 0,
  },
];

const useStyle = () => {
  const { token } = useSiteToken();
  const searchIconColor = '#ced4d9';

  return {
    header: css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0 12px 0 0;

        &:last-child {
          margin-inline-end: 40px;
        }
      }

      ${token.antCls}-row-rtl & {
        > * {
          &:last-child {
            margin-right: 12px;
            margin-left: 40px;
          }
        }
      }
    `,
    popoverMenu: {
      width: 300,

      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
  };
};

const Header: FC = () => {
  const { isMobile } = useContext<SiteContextProps>(SiteContext);
  const [headerState, setHeaderState] = useState<HeaderState>({
    windowWidth: 1400,
    menuVisible: false,
  });
  const location = useLocation();
  const { docVersions } = useAdditionalThemeConfig();

  const onWindowResize = useCallback(() => {
    setHeaderState((prev) => ({
      ...prev,
      windowWidth: window.innerWidth,
    }));
  }, []);
  const handleHideMenu = useCallback(() => {
    setHeaderState((prev) => ({
      ...prev,
      menuVisible: false,
    }));
  }, []);
  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState((prev) => ({
      ...prev,
      menuVisible: visible,
    }));
  }, []);

  const handleVersionChange = useCallback((url: string) => {
    window.location.href = url;
  }, []);

  useEffect(() => {
    handleHideMenu();
  }, [location, handleHideMenu]);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize]);

  const { pathname } = location;
  const locale = useLocale();
  const suffix: string = (locale as any).suffex || '';
  const isHome = ['', `index${suffix}`].includes(pathname);
  const { windowWidth, menuVisible } = headerState;
  const style = useStyle();
  const headerClassName = classNames({
    clearfix: true,
    'home-header': isHome,
  });
  let responsive: IResponsive = null;

  if (windowWidth < RESPONSIVE_XS) {
    responsive = 'crowded';
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = 'narrow';
  }

  const navigationNode = (
    <Navigation key="nav" isMobile={isMobile} responsive={responsive} />
  );
  const versionOptions = Object.keys(docVersions ?? {}).map((version) => ({
    value: docVersions?.[version],
    label: version,
  }));
  let menu: (React.ReactElement | null)[] = [
    navigationNode,
    versionOptions.length > 0 ? (
      <Select
        key="version"
        size="small"
        defaultValue={versionOptions[0]?.value}
        onChange={handleVersionChange}
        popupMatchSelectWidth={false}
        getPopupContainer={(trigger) => trigger.parentNode}
        options={versionOptions}
      />
    ) : null,
    <More key="more" />,
    <LangSwitch key={new Date().getTime()} />,
    <HeaderExtra key="header-Extra" />,
  ];
  if (windowWidth < RESPONSIVE_XS) {
    menu = [navigationNode];
  }

  const colProps = isHome ? colPropsHome : _colProps;

  return (
    <header css={style.header} className={headerClassName}>
      {isMobile && (
        <ClassNames>
          {({ css: cssFn }) => (
            <Popover
              overlayClassName={cssFn(style.popoverMenu)}
              placement="bottomRight"
              content={menu}
              trigger="click"
              open={menuVisible}
              arrow
              onOpenChange={onMenuVisibleChange}
            >
              <MenuOutlined className="nav-phone-icon" />
            </Popover>
          )}
        </ClassNames>
      )}
      <Row
        style={{
          height: 64,
        }}
      >
        <Col {...colProps[0]}>
          <Logo />
        </Col>
        <Col {...colProps[1]} css={style.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          {!isMobile && menu}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
