import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Tooltip, Popover, Segmented } from 'antd';
import {
  QrcodeOutlined,
  WechatOutlined,
  AlipayOutlined,
} from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';
import './Previewer.less';
import wechatConfig from '../../../config/wechat.json';

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

const Previewer: React.FC<IProps> = (props) => {
  const [theme, setTheme] = useLocalState('theme', 'light');
  const [platform, setPlatform] = useLocalState('platform', DefaultPlatform);
  const [loaded, setLoaded] = useState(false);
  const elementRef = useRef(null);
  const [appear, setAppear] = useState(false);

  const basicUrl =
    window.location.protocol + '//' + window.location.host + props.herboxUrl;

  const { url, noChangeButton, page, disablePlatformSwitch, supportPlatform } =
    useMemo(() => {
      return buildUrl(basicUrl, {
        theme,
        platform,
      });
    }, [basicUrl, theme, platform]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 当元素进入视口时触发回调
          console.log(entry);
          setAppear(true);
          // 触发一次后停止观察
          observer.disconnect();
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="previewer" ref={elementRef}>
      {!loaded && <div className="previewer-loading" />}
      <div className="left-btns">
        <div className="btn">
          <Tooltip
            title={disablePlatformSwitch ? '此组件暂只支持支付宝' : '切换平台'}
            placement="top"
          >
            <Segmented
              disabled={disablePlatformSwitch}
              value={supportPlatform}
              onChange={(value) => {
                setPlatform(value as string);
              }}
              options={[
                {
                  label: <AlipayOutlined></AlipayOutlined>,
                  value: 'alipay',
                },
                {
                  label: <WechatOutlined></WechatOutlined>,
                  value: 'wechat',
                },
              ]}
            />
          </Tooltip>
        </div>
      </div>
      <div className="btns">
        <Popover
          content={
            <div style={{ textAlign: 'center' }}>
              <QRCodeSVG
                value={`alipays://platformapi/startapp?appId=2021003121607088&page=${page}`}
              />
            </div>
          }
          title={<div style={{ textAlign: 'center' }}>使用支付宝扫码</div>}
          placement="bottom"
        >
          <div className="btn">
            <QrcodeOutlined />
          </div>
        </Popover>

        {!noChangeButton && (
          <Tooltip
            title={theme === 'dark' ? '使用基础主题' : '使用深色主题'}
            placement="bottom"
          >
            <div className="btn">
              <i
                className={`iconfont ${
                  theme === 'dark' ? 'icon-sun' : 'icon-moon'
                }`}
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                style={{
                  fontSize: theme === 'dark' ? 20 : 14,
                }}
              />
            </div>
          </Tooltip>
        )}
      </div>
      {appear && (
        <iframe
          src={url}
          onLoad={() => setLoaded(true)}
          allow="clipboard-read; clipboard-write"
        />
      )}
    </div>
  );
};

export default Previewer;
