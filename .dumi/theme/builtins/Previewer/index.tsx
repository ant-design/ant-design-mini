import { css } from '@emotion/react';
import { Collapse, ConfigProvider } from 'antd';
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

  const page = searchParams.get('page');
  const { platform: supportPlatform, disablePlatformSwitch } =
    getSupportPlatform(options.platform, page);
  searchParams.set('platform', supportPlatform);
  return {
    url: urlObj.toString(),
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

const Previewer: React.FC<IProps> = (props) => {
  const styles = useStyle();
  const { theme } = useContext<SiteContextProps>(SiteContext);
  const [platform, setPlatform] = useLocalState('platform', DefaultPlatform);
  const [previewerLoaded, setPreviewerLoaded] = useState(false);
  const [sourceCodeLoaded, setSourceCodeLoaded] = useState(false);
  const previewerRef = useRef<any>(null);
  const sourceCodeRef = useRef<any>(null);

  console.log(props);
  const basicUrl =
    window.location.protocol + '//' + window.location.host + props.herboxUrl;
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
      const iframeDocument =
        previeweriframe?.contentDocument ||
        previeweriframe?.contentWindow?.document;

      const element = iframeDocument.getElementsByTagName('body')?.[0];
      console.log('element', element);
      // 修改样式
      if (element) {
        element.style.setProperty(
          'background-color',
          theme.includes('dark') ? '#141414' : '#f9fafb'
        );
      }

      previeweriframe?.contentWindow.postMessage({
        type: 'setIsDarkMode',
        data: theme.includes('dark'),
      });

      const color = theme.includes('dark') ? '#000' : '#fff';
      previeweriframe?.contentWindow.postMessage({
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

  function sendMsgToSourceCode(theme) {
    const sourceCodeiframe = sourceCodeRef.current;
    if (!sourceCodeiframe) return;
    const setThemeColor = function () {
      sourceCodeiframe?.contentWindow.postMessage({
        type: 'setIsDarkMode',
        data: theme.includes('dark'),
      });
    };
    sourceCodeiframe.onload = () => {
      setThemeColor();
      setTimeout(setThemeColor, 500);
    };
    setThemeColor();
  }

  useEffect(() => {
    console.log(theme);
    sendMsgToPreviewer(theme);
    sendMsgToSourceCode(theme);
  }, [theme]);

  return (
    <>
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
      {/* @ts-ignore */}
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              contentPadding: '0 !important',
            },
          },
        }}
      >
        {/* @ts-ignore */}
        <Collapse
          size="large"
          items={[
            {
              key: '1',
              label: 'DEMO 示例代码',
              forceRender: true,
              children: (
                <div className="sourceCode">
                  {!sourceCodeLoaded && <div className="previewer-loading" />}
                  <iframe
                    ref={sourceCodeRef}
                    src={url.replace('preview.html', 'code.html')}
                    onLoad={() => setSourceCodeLoaded(true)}
                    allow="clipboard-read; clipboard-write"
                  />
                </div>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </>
  );
};

export default Previewer;
