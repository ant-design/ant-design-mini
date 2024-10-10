import { css } from '@emotion/react';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import wechatConfig from '../../../../config/wechat.json';
import useSiteToken from '../../hooks/useSiteToken';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import './index.less';

interface IProps {
  herboxUrl: string;
}

function buildUrl(
  basic: string,
  options: {
    platform: string;
    theme: string;
  }
) {
  const urlObj = new URL(basic);
  const searchParams = urlObj.searchParams;
  const noChangeButton = !!searchParams.get('noChangeButton');
  if (noChangeButton) {
    searchParams.set('less-theme', 'light');
  } else {
    searchParams.set('less-theme', options.theme);
  }
  const page = searchParams.get('page');
  const { platform: supportPlatform, disablePlatformSwitch } =
    getSupportPlatform(options.platform, page);
  searchParams.set('platform', supportPlatform);
  return {
    url: urlObj.toString(),
    noChangeButton,
    page,
    supportPlatform,
    disablePlatformSwitch,
  };
}

const useLocalState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (error) {
        return defaultValue;
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

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
    previewerWrapper: css`
      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
  };
};

const Previewer: React.FC<IProps> = (props) => {
  const styles = useStyle();
  const { theme } = useContext<SiteContextProps>(SiteContext);
  // const [theme, setTheme] = useLocalState('theme', 'light');
  const [platform, setPlatform] = useLocalState('platform', DefaultPlatform);
  const [loaded, setLoaded] = useState(false);
  const previewerRef = useRef<any>(null);

  console.log(props);
  const basicUrl =
    window.location.protocol + '//' + window.location.host + props.herboxUrl;
  const { url } = useMemo(() => {
    return buildUrl(basicUrl, {
      theme: 'light',
      platform,
    });
  }, [basicUrl, theme, platform]);

  useEffect(() => {
    console.log(theme);
    const iframe = previewerRef.current;
    if (!iframe) return;

    const setThemeColor = function () {
      const iframeDocument =
        iframe?.contentDocument || iframe?.contentWindow?.document;

      // 找到需要修改的元素
      const element = iframeDocument.getElementsByTagName('html')?.[0];
      // 修改样式
      if (element) {
        if (theme.includes('dark')) {
          element.style.background = '#141414';
        }
        if (theme.includes('light')) {
          element.style.background = '#fff';
        }
      }
    };
    iframe.onload = setThemeColor;
    setThemeColor();
  }, [theme]);

  return (
    <div
      className="previewer"
      css={css`
        ${styles.previewerWrapper}
      `}
    >
      {!loaded && <div className="previewer-loading" />}

      <iframe
        ref={previewerRef}
        src={url}
        onLoad={() => setLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
