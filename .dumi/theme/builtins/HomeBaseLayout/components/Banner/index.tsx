import { css } from '@emotion/react';
import Atropos from 'atropos/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";
import 'atropos/css'

const bgLight = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/X8TvQKnc1MQAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const bgDark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/3o3ASIN3QeEAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const contentLight = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/QSZ6QZwzwQgAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const contentDark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Y04ZTJBscLsAAAAAAAAAAAAADoEQAQFr/original'

const useStyle = ({
  isDark,
  isMobile,
 }) => {

  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    mainContainer: css`
      width: 100%;
      height: 602px;
      background: url(${isDark ? bgDark : bgLight}) no-repeat center center;
      background-size: cover;
      position: relative;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      display: flex;
      justify-content: center;
    `,
    mainContent: css`
      width: 100%;
      height: 602px;
      position: relative;

      @media (min-width: 1600px) {
        max-width: 1600px;
      }
    `,
    featureContainer: css`
      width: 100%;
      height: 602px;
      position: relative;

      & .atropos-shadow {
        display: none;
      }

      @media (max-width: 900px) {
        display: none;
      }
    `,
    featureWrap: css`
      width: 695px;
      height: 602px;
      position: absolute;
      right: 0;
      top: 0;
    `,
    featureContent: css`
      width: 695px;
      height: 583px;
      background: url(${isDark ? contentDark : contentLight}) no-repeat center center;
      background-size: contain;
      object-fit: contain;
    `,
    actionWrap: css`
      position: absolute;
      text-align: left;
      top: 192px;
      left: 24px;
      z-index: 80;

      @media (max-width: 900px) {
        right: 24px;
        text-align: center;
      }
    `,
    actionTitle: css`
      font-size: 52px;
      font-weight: bold;
    `,
    actionSubTitle: css`
      font-size: 22px;
    `,
    actionMainBtn: css`
      all: initial;
      width: 136px;
      height: 41px;
      font-size: 16px;
      font-weight: 500;
      line-height: 41px;
      background: #fff;
      border-radius: 21px;
      box-shadow: 1px 1px 7px 0px #012a6526;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 50px;
    `,
    actionMainBtnImage: css`
      width: 9px;
      height: 13px;
      margin-left: 10px;
    `,
    actionSubBtn: css`
      all: initial;
      width: 136px;
      height: 41px;
      font-size: 16px;

      line-height: 41px;
      background: #738ba466;
      border: 1px solid #ffffff;
      border-radius: 21px;
      box-shadow: 1px 1px 7px 0px #012a6526;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 50px;
      margin-left: 13px;
      color: #fff;
    `,
  };
};

export default ({
  isDark,
  isMobile,
}) => {
  const lang = useLocaleValue('bannerLocales');
  const style = useStyle({
    isDark,
    isMobile,
  });

  return (
    <div css={style.mainContainer}>
      <div css={style.mainContent}>
        <div css={style.featureContainer}>
          <Atropos
            css={style.featureWrap}
            highlight={false}
            activeOffset={0}
            rotateXMax={5}
            rotateYMax={5}
          >
            <div css={style.featureContent}></div>
          </Atropos>
        </div>
        <div css={style.actionWrap}>
          <h1 css={style.actionTitle}>Ant Design Mini</h1>
          <div css={style.actionSubTitle}>
            {lang.desc}
          </div>
          <div>
            <a
              css={style.actionMainBtn}
              href='/guide/quick-start'
            >
              <span>
                {lang.integration}
              </span>
              <img
                css={style.actionMainBtnImage}
                src="https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/FU4JTap3m3QAAAAAAAAAAAAADoEQAQFr/original"
              />
            </a>
            <a
              css={style.actionSubBtn}
              href="/components/button"
            >
              {lang.try}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
