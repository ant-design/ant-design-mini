import { css } from '@emotion/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";

const lightLogos = [
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/rYmkS4S3-2YAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/rlkkR4luEpAAAAAAAAAAAAAADoEQAQFr/fmt.webp',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/CI-RRYHHGmoAAAAAAAAAAAAADoEQAQFr/fmt.webp',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/X1KRTbLoQMsAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/wSHKRoozEE4AAAAAAAAAAAAADoEQAQFr/fmt.webp',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/LwlER4SjL_AAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/RSccQpHEwQoAAAAAAAAAAAAADoEQAQFr/fmt.webp',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/E2jUT5GhF30AAAAAAAAAAAAADoEQAQFr/fmt.webp'
]

const darkLogos = [
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/W8O-QqPKw0YAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/9VzgSIlhDd8AAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/zB90Q7-Wz0sAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/zpgEQJKFV-kAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/vHcDSa-L-a8AAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/mfSjRr_6ti8AAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/BkeLTI8rKdoAAAAAAAAAAAAADoEQAQFr/original',
  'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/RUL4SZC87fAAAAAAAAAAAAAADoEQAQFr/original'
]

const useStyle = ({
  isDark,
  isMobile,
 }) => {

  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    mainContainer: css`
      width: 100%;
      height: 195px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      display: flex;
      align-items: center;
      background-color: ${isDark ? '#161616' : '#fff'};
      flex-direction: column;
      justify-content: center;
    `,
    title: css`
      font-size: 20px;
      margin-bottom: 35px;
    `,
    logoWrap: css`
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;

      @media (min-width: 1600px) {
        max-width: 1600px;
      }
    `,
    logo: css`
      height: 38px;
    `
  };
};

export default ({
  isDark,
  isMobile,
}) => {
  const lang = useLocaleValue('userLocales');
  const style = useStyle({
    isDark,
    isMobile,
  });

  return (
    <div css={style.mainContainer}>
      <div css={style.title}>{lang.title}</div>
      <div css={style.logoWrap}>
        {
          (isDark ? darkLogos : lightLogos).map((item) => {
            return (
              <img
                src={item}
                key={item}
                css={style.logo}
              />
            )
          })
        }
      </div>
    </div>
  )
}
