import { css } from '@emotion/react';
import { ConfigProvider, Row, Col, Space, Button, Input, message } from 'antd';
import { useContext, useState, useRef, useEffect, useMemo } from 'react';
import hljs from 'highlight.js';
import useSiteToken from '../hooks/useSiteToken';
import SiteContext from '../slots/SiteContext';
import 'highlight.js/styles/dark.css';

function buildUrl(
  basic: string,
  options: {
    platform: string;
    theme: string;
  }
) {
  const urlObj = new URL(basic);
  const searchParams = urlObj.searchParams;

  function getSupportPlatform(platform: string) {
    const supportWechat = true;
    if (!supportWechat && platform === 'wechat') {
      return {
        platform: 'alipay',
        disablePlatformSwitch: true,
      };
    }
    return {
      platform,
      disablePlatformSwitch: false,
    };
  }

  const { platform: supportPlatform, disablePlatformSwitch } =
    getSupportPlatform(options.platform);
  searchParams.set('platform', supportPlatform);
  searchParams.set('theme', options.theme);

  // http://localhost:8000/preview.html
  // 为了不让iframe的url变化，导致重新渲染iframe，这里去掉url中的变量参数，通过iframe通信的方式，让小程序实现去跳转页面
  const originPathUrl = new URL(urlObj.origin + urlObj.pathname);
  originPathUrl.searchParams.set(
    'compilerServer',
    searchParams.get('compilerServer') || ''
  );
  originPathUrl.searchParams.set('page', '');
  return {
    url: urlObj.toString(),
    originPath: originPathUrl.toString(),
    supportPlatform,
    disablePlatformSwitch,
  };
}


const initSchemaData = {
  "type": "object",
  "radius": false,
  "requiredMarkStyle": "text-required",
  "displayType": "row",
  "properties": {
    "group1": {
      "title": "Group 1",
      "type": "group-card",
      "widget": "group-card",
      "order": 1,
      "properties": {
        "input": {
          "title": "Input",
          "widget": "input",
          "required": true,
          "props": {
            "placeholder": "输入字符"
          },
        }
      }
    }
  }
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    mainContainer: css`
      font-family: ${fontFamily};
    `,
  };
};

const { TextArea } = Input;

export default ({ lang }) => {
  const siteConfig = useContext(SiteContext);
  const isDark = siteConfig.theme.includes('dark');
  const isMobile = !!siteConfig.isMobile;
  const style = useStyle({ isDark, isMobile });

  const [schema, setSchema] = useState(initSchemaData);
  const [btnLoading, setBtnLoading] = useState(false);
  const [formDescription, setFormDescription] = useState('');
  const previewerRef = useRef<any>(null);
  const codeRef = useRef<HTMLElement>(null);
  const [previewerLoaded, setPreviewerLoaded] = useState(false);


  const createSchemaByDescription = () => {
    // setBtnLoading(true);
    // fetch('http://127.0.0.1:7001/api/form/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     content: formDescription,
    //   }),
    // }).then(res => res.json()).then(res => {
    //   message.success({
    //     content: 'schema生成成功',
    //   })
    //   setSchema(res.data.data);
    //   setBtnLoading(false);

    // }).catch(() => {
    //   setBtnLoading(false);
    //   message.error({
    //     content: 'schema生成失败，请重试',
    //   });
    // });
    const previeweriframe = previewerRef.current;
    previeweriframe?.contentWindow?.postMessage({
      type: 'evaluateJavaScriptInWorkerCode',
      data: `
        const currentPage = getCurrentPages()[0];
        currentPage.setData({
          schema: ${JSON.stringify(schema)},
        });
    `,
    });
  }

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [schema]);

  const { theme, platform, herboxUrl } =
    useContext(SiteContext);

  const basicUrl =
    window.location.protocol + '//' + window.location.host + herboxUrl;

  const { originPath } = useMemo(() => {
    return buildUrl(basicUrl, {
      theme: theme?.find((t) => ['dark', 'light'].includes(t)) || 'light',
      platform,
    });
  }, [basicUrl, theme, platform]);


  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div css={style.mainContainer}>
        <Row>
          <Col span={14}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <TextArea 
                rows={4} 
                value={formDescription}
                onChange={e => {
                  setFormDescription(e.target.value);
                }} 
                placeholder="请输入表单描述，例如：创建一个表单，包含一个输入框"  />
              <Button loading={btnLoading} type="primary" onClick={() => createSchemaByDescription()}>生成schema</Button>
              <pre>
                <code ref={codeRef} style={{ minHeight: '600px', maxHeight: '1200px' }}> 
                  {JSON.stringify(schema, null, 2)}
                </code>
              </pre>
            </Space>
          </Col>
          <Col span={10}>
            <div style={{ height: '800px', width: '420rpx', paddingLeft: 100 }}>
              <iframe
                style={{ height: '633px', width: '390rpx', border: 0, }}
                ref={previewerRef}
                src={`${originPath}pages/FormRenderMini/SchemaEditor/index`}
                onLoad={() => setPreviewerLoaded(true)}
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};
