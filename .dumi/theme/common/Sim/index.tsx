import { css } from '@emotion/react';
import { useMatchedRoute } from 'dumi';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import wechatConfig from '../../../../config/wechat.json';
import useSiteToken from '../../hooks/useSiteToken';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import './index.less';

interface IProps {}

function buildUrl(
  basic: string,
  options: {
    platform: string;
    theme: string;
  }
) {
  const urlObj = new URL(basic);
  const searchParams = urlObj.searchParams;

  const page = searchParams.get('page');
  const { platform: supportPlatform, disablePlatformSwitch } =
    getSupportPlatform(options.platform, page);
  searchParams.set('platform', supportPlatform);
  searchParams.set('theme', options.theme);

  return {
    url: urlObj.toString(),
    page,
    supportPlatform,
    disablePlatformSwitch,
  };
}

const DefaultPlatform = 'alipay';

function getSupportPlatform(platform: string, page: string | null) {
  const supportWechat = wechatConfig.pages
    .map((o) => `${o}/index`)
    .some((i) => i === page);
  if (!supportWechat && platform === 'wechat') {
    return {
      platform: DefaultPlatform,
      disablePlatformSwitch: true,
    };
  }
  return {
    platform,
    disablePlatformSwitch: false,
  };
}
const useStyle = () => {
  const { token } = useSiteToken();
  return {
    // not show simulator
    previewerWrapper: css`
      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
    dark: css`
      background-color: #141414;
    `,
    light: css`
      background-color: #f9fafb;
    `,
  };
};

const Previewer: React.FC<IProps> = () => {
  const styles = useStyle();
  const { theme, platform, herboxUrl } =
    useContext<SiteContextProps>(SiteContext);
  const [previewerLoaded, setPreviewerLoaded] = useState(false);
  const previewerRef = useRef<any>(null);

  const matchedRoute = useMatchedRoute();

  const isShowSim = useMemo(() => {
    return matchedRoute?.meta?.frontmatter?.nav?.path === '/components';
  }, [matchedRoute]);

  const basicUrl =
    window.location.protocol + '//' + window.location.host + herboxUrl;
  const { url } = useMemo(() => {
    return buildUrl(basicUrl, {
      theme: theme?.find((t) => ['dark', 'light'].includes(t)) || 'light',
      platform,
    });
  }, [basicUrl, theme, platform]);

  function sendMsgToPreviewer(theme) {
    const previeweriframe = previewerRef.current;
    if (!previeweriframe) return;
    const setThemeColor = function () {
      previeweriframe?.contentWindow?.postMessage({
        type: 'setIsDarkMode',
        data: theme.includes('dark'),
      });

      const color = theme.includes('dark') ? '#000' : '#fff';
      previeweriframe?.contentWindow?.postMessage({
        type: 'evaluateJavaScriptInWorkerCode',
        data: `
         my.setNavigationBar({
          backgroundColor: '${color}',
          borderBottomColor: '${color}',
        });
        my.setBackgroundColor({
          backgroundColor: '${color}',
        });
      `,
      });
    };
    previeweriframe.onload = () => {
      setThemeColor();
      setTimeout(setThemeColor, 500);
    };
    setThemeColor();
  }

  useEffect(() => {
    sendMsgToPreviewer(theme);
  }, [theme]);

  if (!herboxUrl || !isShowSim) return null;

  return (
    <div
      className="previewer"
      css={css`
        ${styles.previewerWrapper}
        ${theme.includes('dark') ? styles.dark : styles.light}
      `}
    >
      {!previewerLoaded && <div className="previewer-loading" />}
      <iframe
        ref={previewerRef}
        src={url}
        onLoad={() => setPreviewerLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
