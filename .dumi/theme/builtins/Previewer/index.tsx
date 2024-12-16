import { Collapse, ConfigProvider } from 'antd';
import { FormattedMessage } from 'dumi';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
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
    getSupportPlatform(options.platform);
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

function getSupportPlatform(platform: string) {
  const supportWechat = true;
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

const Previewer: React.FC<IProps> = (props) => {
  const { theme, platform, updateSiteConfig } =
    useContext<SiteContextProps>(SiteContext);

  useEffect(() => {
    updateSiteConfig({
      herboxUrl: props.herboxUrl,
    });
  }, [props.herboxUrl]);

  const [sourceCodeLoaded, setSourceCodeLoaded] = useState(false);

  const sourceCodeRef = useRef<any>(null);

  const basicUrl =
    window.location.protocol + '//' + window.location.host + props.herboxUrl;
  const { url, page } = useMemo(() => {
    return buildUrl(basicUrl, {
      theme: theme?.find((t) => ['dark', 'light'].includes(t)) || 'light',
      platform,
    });
  }, [basicUrl, theme, platform]);

  function sendMsgToSourceCode(theme) {
    const sourceCodeiframe = sourceCodeRef.current;
    if (!sourceCodeiframe) return;
    const setThemeColor = function () {
      sourceCodeiframe?.contentWindow?.postMessage({
        type: 'setIsDarkMode',
        data: theme.includes('dark'),
      });
    };
    sourceCodeiframe.onload = () => {
      setThemeColor();
      setTimeout(setThemeColor, 500);
      setTimeout(setThemeColor, 1000);
    };
    setThemeColor();
  }

  useEffect(() => {
    sendMsgToSourceCode(theme);
  }, [theme, page, platform]);

  return (
    // @ts-ignore
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            contentPadding: '0 !important',
            headerPadding: '8px !important',
            headerBg: theme.includes('dark') ? 'transparent' : '#f7f7f7',
          },
        },
      }}
    >
      {/* @ts-ignore */}
      <Collapse
        className={`previewer-collapse ${
          theme.includes('dark') ? 'dark' : 'light'
        }`}
        size="large"
        items={[
          {
            key: '1',
            label: <FormattedMessage id="app.previewer.collapse.label" />,
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
        onChange={(openList) => {
          const setMsgToSim = window.setMsgToSim;
          if (openList.length === 0) {
            // 关闭
            setMsgToSim &&
              setMsgToSim(`
                my.navigateBack();
            `);
            return;
          }
          // 打开
          setMsgToSim &&
            setMsgToSim(`
              const currentPage = getCurrentPages()[0].route
              if(currentPage !== '${page}') {
                my.navigateTo({
                  url: '/${page}'
                });
              }
            `);
        }}
      />
    </ConfigProvider>
  );
};

export default Previewer;
