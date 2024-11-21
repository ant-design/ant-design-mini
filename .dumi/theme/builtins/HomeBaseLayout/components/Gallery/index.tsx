import { css } from '@emotion/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";
import Title from "../Title";
import ItemBox from './ItemBox';

const componentList = {
  'zh-CN': [
    {
      title: '筛选',
      tag: '新增',
      isNew: true,
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/AsAYR6Ppeh4AAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Up6kR4FSEbEAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 300,
    },
    {
      title: '反馈菜单',
      tag: '新增',
      isNew: true,
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Ue6ISoWoCSwAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/MWKcSIUJ_yQAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 227,
    },
    {
      title: '宫格',
      tag: '更新',
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/_vCuQ7g10ykAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/HyFJRYNQX2YAAAAAAAAAAAAADoEQAQFr/original',
      width: 300,
    },
    {
      title: '弹窗',
      tag: '更新',
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/ASJORa_fgK0AAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/bjnWQbPPz6sAAAAAAAAAAAAADoEQAQFr/original',
      width: 240,
    },
  ],
  'en': [
    {
      title: 'Filter',
      tag: 'New',
      isNew: true,
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/UH1UT6hvmV4AAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/fj-qRIzRNxIAAAAAAAAAAAAADoEQAQFr/original',
      width: 300,
    },
    {
      title: 'Feedback',
      tag: 'New',
      isNew: true,
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/rSKaQrWB2mUAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/RFoKS5D1XhcAAAAAAAAAAAAADoEQAQFr/fmt.webp',
      width: 227,
    },
    {
      title: 'Grid',
      tag: 'Update',
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/OOtIRLHJSNIAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/oAG3SI8Eq0MAAAAAAAAAAAAADoEQAQFr/original',
      width: 300,
    },
    {
      title: 'Modal',
      tag: 'Update',
      dark: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/IjTYSalsOJIAAAAAAAAAAAAADoEQAQFr/original',
      light: 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/KZp7Sq0kceYAAAAAAAAAAAAADoEQAQFr/original',
      width: 240,
    },
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
      min-height: 693px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      padding-top: 80px;
      padding-bottom: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    `,
    contentWrap: css`
      width: 100%;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media (min-width: 1600px) {
        max-width: 1600px;
      }
    `
  };
};

export default ({
  isDark,
  isMobile,
}) => {
  const lang = useLocaleValue('galleryLocales');
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
          (componentList[lang.key] || []).map((item) => {
            return (
              <ItemBox
                key={item.title}
                data={item}
                isDark={isDark}
                isMobile={isMobile}
              />
            )
          })
        }
      </div>
    </div>
  )
}
