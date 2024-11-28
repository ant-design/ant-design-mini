import { css } from '@emotion/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";
import Title from "../Title";

const frameList = {
  'zh-CN': [
    {
      title: 'Ant Design',
      subTitle: '企业级产品设计体系',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/BdagQ4iT8TMAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://ant.design/',
    },
    {
      title: 'AntV',
      subTitle: '全新一代数据可视化解决方案',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/j-PwR5GHEWYAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://antv.antgroup.com/'
    },
    {
      title: 'Ant Design Mobile',
      subTitle: 'Ant Design 移动端 UI 组件库',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/6gdISLFqBBAAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://mobile.ant.design/'
    },
    {
      title: 'Kitchen',
      subTitle: '一款为设计者提升效率的工具集',
      logo: 'https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg',
      href: 'https://kitchen.alipay.com/'
    }
  ],
  'en': [
    {
      title: 'Ant Design',
      subTitle: 'Design System',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/BdagQ4iT8TMAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://ant.design/',
    },
    {
      title: 'AntV',
      subTitle: 'Data Visualization Solution',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/j-PwR5GHEWYAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://antv.antgroup.com/'
    },
    {
      title: 'Ant Design Mobile',
      subTitle: 'Mobile UI Component Library',
      logo: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/6gdISLFqBBAAAAAAAAAAAAAADoEQAQFr/original',
      href: 'https://mobile.ant.design/'
    },
    {
      title: 'Kitchen',
      subTitle: 'Enhance Efficiency for Designers',
      logo: 'https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg',
      href: 'https://kitchen.alipay.com/'
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
      min-height: 476px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      padding-top: 80px;
      padding-bottom: 100px;
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
    `,
    contentWrap: css`
      width: 100%;
      max-width: 1200px;
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    itemWrap: css`
      all: initial;
      margin-bottom: 24px;
      min-width: 271px;
      height: 163px;
      border-radius: 12px;
      box-shadow: ${
        isDark ? 'unset' : '0px 10px 28px 0px #718ecc1f'
      };
      background: ${
        isDark ? '#26272e' : '#ffffff'
      };
      box-sizing: border-box;
      padding: 22px;
      text-align: left;
      margin-right: 24px;
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      @media (max-width: 1220px) {
        width: 48%;
        margin-right:0;
      }

      @media (max-width: 600px) {
        width: 100%;
        margin-right:0;
      }

      cursor: pointer;
    `,
    itemImg: css`
      height: 50px;
      margin-bottom: 15px;
    `,
    itemTitle: css`
      font-size: 20px;
      font-weight: medium;
      color: ${
        isDark ? '#c5cad1' : 'rgba(0, 0, 0, 0.85)'
      };
      margin-bottom: 6px;
    `,
    itemSubTitle: css`
      font-size: 14px;
      color: ${
        isDark ? '#808080' : 'rgba(0, 0, 0, 0.65)'
      }
    `
  };
};

export default ({
  isDark,
  isMobile,
}) => {
  const lang = useLocaleValue('frameLocales');
  const style = useStyle({
    isDark,
    isMobile,
  });

  return (
    <div css={style.container}>
      <Title
        title={lang.title}
        subTitle={lang.subTitle}
        isDark={isDark}
      />
      <div css={style.contentWrap}>
        {
          (frameList[lang.key] || []).map((item) => {
            return (
              <a
                css={style.itemWrap}
                key={item.title}
                href={item.href}
              >
                <img
                  src={item.logo}
                  css={style.itemImg}
                />
                <div css={style.itemTitle}>
                  {item.title}
                </div>
                <div css={style.itemSubTitle}>
                  {item.subTitle}
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}
