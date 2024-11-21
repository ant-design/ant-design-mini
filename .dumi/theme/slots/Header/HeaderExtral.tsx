import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Tooltip } from 'antd';
import { DarkTheme, Light } from 'antd-token-previewer/lib/icons';
import { useContext, type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import useLocaleValue from "../../../theme/hooks/useLocaleValue";

const BASE_SIZE = '1.2em';

const useStyle = () => {
  const { token } = useSiteToken();
  const { controlHeight, motionDurationMid } = token;

  return {
    container: css`
      padding-bottom: 4px;
    `,
    btn: css`
      color: ${token.colorText};
      border-color: ${token.colorBorder};
      padding: 0 !important;
      width: ${controlHeight}px;
      height: ${controlHeight}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: ${token.borderRadius}px;
      transition: all ${motionDurationMid};
      cursor: pointer;

      .btn-inner {
        transition: all ${motionDurationMid};
      }

      &:hover {
        background: ${token.colorBgTextHover};
      }

      img {
        width: ${BASE_SIZE};
        height: ${BASE_SIZE};
      }

      .anticon {
        font-size: ${BASE_SIZE};
      }
    `,
    theme: css`
      svg {
        width: 16px;
        height: 16px;
      }
    `,
  };
};

const HeaderExtra: FC = () => {
  const { github, socialLinks, prefersColor } = useAdditionalThemeConfig();
  const style = useStyle();
  const { theme, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);
  const lang = useLocaleValue('headerLocales');
  const isDark = theme.includes('dark');
  return (
    <div css={style.container}>
      {prefersColor.switch && (
        <Tooltip
          title={lang.theme}
        >
          <button
            css={[style.btn, style.theme]}
            type="button"
            onClick={() => {
              const themeValue = isDark ? 'light' : 'dark';
              updateSiteConfig({ theme: [themeValue] });
            }}
          >
            {
              isDark ?
                <DarkTheme /> :
                <Light/>
            }
          </button>
        </Tooltip>
      )}

      {github || socialLinks?.github ? (
        <Tooltip title="Github">
          <a
            key="github"
            href={github || socialLinks?.github}
            target="_blank"
            rel="noreferrer"
          >
            <button css={[style.btn]} type="button">
              <GithubOutlined />
            </button>
          </a>
        </Tooltip>
      ) : null}
    </div>
  );
};

export default HeaderExtra;
