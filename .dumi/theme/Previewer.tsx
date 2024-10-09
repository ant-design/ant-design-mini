import React, { useEffect, useMemo, useState } from 'react';
import wechatConfig from '../../config/wechat.json';
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
console.log(props);
  const basicUrl =
    window.location.protocol + '//' + window.location.host + (props.herboxUrl||'/preview.html');
  const { url, noChangeButton, page, disablePlatformSwitch, supportPlatform } =
    useMemo(() => {
      return buildUrl(basicUrl, {
        theme,
        platform,
      });
    }, [basicUrl, theme, platform]);

  return (
    <div className="previewer">
      {!loaded && <div className="previewer-loading" />}

      <iframe
        src={url}
        onLoad={() => setLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
