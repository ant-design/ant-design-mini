import { css } from '@emotion/react';
import Atropos from 'atropos/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";
import Title from "../Title";
import 'atropos/css'
import { Button } from 'antd';
import { useContext } from 'react';
import { SwapOutlined } from '@ant-design/icons';
import SiteContext from '../../../../../theme/slots/SiteContext';
import { history } from 'dumi';

const lightBg = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/zBllT4iUaJsAAAAAAAAAAAAADoEQAQFr/fmt.webp';
const darkBg = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/pgE1TJxC04UAAAAAAAAAAAAADoEQAQFr/fmt.webp';

const componentList = {
  'zh-CN': [
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/QjFTR5kfTYcAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/b3HpTI5EcCcAAAAAAAAAAAAADoEQAQFr/original',
      width: 225,
      left: 200,
      top: 10,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/-IF1RbuTd2gAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/xOMxRrX_QR4AAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 84,
      left: 550,
      top: 50,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/8EhnSpjjRU0AAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/xQrURLJoIuEAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 180,
      right: 430,
      top: 1,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/v7U7RZvZp4gAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/vsHXR72JvIYAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 220,
      left: 289,
      bottom: 1,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Go4iQaJZ2cMAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/aZQgR5ipEcEAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 200,
      right: 550,
      bottom: 180,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/zgbaTa7YGg4AAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/C4Z0T49uhRIAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 225,
      right: 220,
      bottom: 50,
    }
  ],
  'en': [
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/8OhhTq-HAZEAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/p2awRb3Tb4QAAAAAAAAAAAAADoEQAQFr/original',
      width: 225,
      left: 200,
      top: 10,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/akgcToUvzGEAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/HNlmQpepfRgAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 84,
      left: 550,
      top: 50,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/ztdYTrOnHRwAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/wyKSSbyBj0sAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 180,
      right: 430,
      top: 1,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/maFaSK0Zz8sAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/T2N8R72pevMAAAAAAAAAAAAADoEQAQFr/original',
      width: 220,
      left: 289,
      bottom: 1,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/OETGRLpfrpcAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/zeGhSYYOx1MAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 200,
      right: 550,
      bottom: 180,
    },
    {
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/cFqQQqDs_oQAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/g9_bRZ9xX4EAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 225,
      right: 220,
      bottom: 50,
    }
  ]
}

const useStyle = ({
  isDark,
  isMobile,
 }) => {

  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    container: css`
      width: 100%;
      height: 782px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      padding-top: 80px;
      padding-bottom: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      position: relative;

      background-color: ${
        isDark ?
          '#0a0a0a' :
          '#f1f5ff'
      };

      background-image: url(${isDark ? darkBg : lightBg});
      background-position: center 50px;
      background-size: 900px;
      background-repeat: no-repeat;
    `,
    contentWrap: css`
      width: 100%;
      height: 400px;
      max-width: 1600px;
      margin-top: 50px;
      display: flex;
      position: relative;

      & .atropos-shadow {
        display: none;
      }
    `,
    compImg: css`
      @media (max-width: 1200px) {
        display: none;
      }
    `
  };
};

export default ({
  isDark,
  isMobile,
}) => {
  const lang = useLocaleValue('themeLocales');
  const style = useStyle({
    isDark,
    isMobile,
  });

  const { updateSiteConfig } = useContext(SiteContext);
  const isEn = lang.key === 'en';

  return (
    <div css={style.container}>
      <Title
        title={lang.title}
        subTitle={lang.subTitle}
        isDark={isDark}
      >
        <div>
          <Button
            type='primary'
            size='large'
            icon={<SwapOutlined />}
            iconPosition='end'
            style={{
              margin: 24
            }}
            onClick={
              () => {
                const themeValue = isDark ? 'light' : 'dark';
                updateSiteConfig({ theme: [themeValue] });
              }
            }
          >
            {isDark ? lang.light : lang.dark}
          </Button>

          <Button
            type='primary'
            size='large'
            icon={<SwapOutlined />}
            iconPosition='end'
            onClick={
              () => {
                history.push({
                  pathname: isEn ? '/' : '/index-en',
                });
              }
            }
          >
            {lang.langDesc}
          </Button>
        </div>
      </Title>

      <Atropos
        css={style.contentWrap}
        highlight={false}
        activeOffset={0}
        rotateXMax={2}
        rotateYMax={2}
      >
        {
          (componentList[lang.key] || []).map((item, index) => {
            let clientWidth = document.documentElement.clientWidth;
            if (clientWidth > 1600) {
              clientWidth = 1600;
            }
            const rate = clientWidth / 1600;

            return (
              <img
                data-atropos-offset={(index + 1) * 1.5}
                key={item.dark}
                src={isDark ? item.dark : item.light}
                css={style.compImg}
                style={{
                  zIndex: 90,
                  pointerEvents: 'none',
                  width: item.width,
                  position: 'absolute',
                  left: item.left * rate || 'unset',
                  right: item.right * rate || 'unset',
                  top: item.top || 'unset',
                  bottom: item.bottom || 'unset',
                }}
              />
            )
          })
        }
      </Atropos>
    </div>
  )
}
