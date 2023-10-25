import React, { useState, useEffect, useMemo } from 'react';
import { Tooltip, Popover, Segmented } from 'antd';
import {
  QrcodeOutlined,
  WechatOutlined,
  AlipayOutlined,
} from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';
import './Previewer.less';

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
  searchParams.set('platform', options.platform);
  return {
    url: urlObj.toString(),
    noChangeButton,
    page,
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

const Previewer: React.FC<IProps> = (props) => {
  const [theme, setTheme] = useLocalState('theme', 'light');
  const [platform, setPlatform] = useLocalState('platform', 'alipay');

  const [loaded, setLoaded] = useState(false);

  const basicUrl =
    window.location.protocol + '//' + window.location.host + props.herboxUrl;

  const { url, noChangeButton, page } = useMemo(() => {
    return buildUrl(basicUrl, {
      theme,
      platform,
    });
  }, [basicUrl, theme, platform]);

  return (
    <div className="previewer">
      {!loaded && <div className="previewer-loading" />}
      <div className="left-btns">
        <div className="btn">
          <Segmented
            value={platform}
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
      <iframe
        src={url}
        onLoad={() => setLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
