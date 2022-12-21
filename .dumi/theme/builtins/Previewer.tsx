import React, { useState, useEffect } from 'react';
import { Tooltip, Popover } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import {QRCodeSVG} from 'qrcode.react';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}

function getURL(url: string) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  let theme = '';
  if (!searchParams.get('noChangeButton')) {
    const themeObj = searchParams.get('less-theme');
    if (themeObj === null) {
      theme = localStorage.getItem('theme') || '';
    } else {
      theme = themeObj;
    }
  }
  searchParams.set('less-theme', theme);
  return urlObj.toString();
}

const listeners: ((url: string) => void)[] = [];

const Previewer: React.FC<IProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [url, setURL] = useState(getURL(window.location.protocol + '//' + window.location.host + props.herboxUrl));

  function changeURL(url) {
    const urlObj = new URL(url);
    const searchParams = urlObj.searchParams;
    let theme = searchParams.get('less-theme');
    theme = theme === 'dark' ? '' : 'dark';
    searchParams.set('less-theme', theme);
    const newURL = urlObj.toString();
    localStorage.setItem('theme', theme);
    listeners.forEach(item => item(newURL));
  }

  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  const page = searchParams.get('defaultPage');
  const theme = searchParams.get('less-theme');
  const noChangeButton = searchParams.get('noChangeButton');
  useEffect(() => {
    listeners.push((url: string) => {
      setURL(url);
    })
  }, []);

  return (
    <div className="previewer">
      {!loaded && <div className="previewer-loading" />}
      <div className="btns">
        <Popover content={
          <div style={{textAlign: 'center'}}>
            <QRCodeSVG value={`alipays://platformapi/startapp?appId=2021003169685088&page=${page}`} />
          </div>
        } title={<div style={{textAlign: 'center'}}>使用支付宝扫码</div>} placement="bottom">
          <div className="btn">
            <QrcodeOutlined />
          </div>
        </Popover>

        {
          !noChangeButton
          &&
          <Tooltip
            title={theme === 'dark' ? '使用基础主题' : '使用深色主题'}
            placement="bottom"
          >
            <div className="btn">
              <i className={`iconfont ${theme === 'dark' ? 'icon-sun' : 'icon-moon'}`} onClick={() => {
                changeURL(url);
              }} style={{
                fontSize: theme === 'dark' ? 20 : 14,
              }} />
            </div>
          </Tooltip>
        }
     
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
