import { css } from '@emotion/react';
import Atropos from 'atropos/react';
import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";
import useSiteToken from "../../../../../theme/hooks/useSiteToken";
import 'atropos/css'

const bgLight = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/X8TvQKnc1MQAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const bgDark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/3o3ASIN3QeEAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const contentLight = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Q47ITaa7OkIAAAAAAAAAAAAADoEQAQFr/fmt.webp'
const contentDark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/CtzWRYHofh0AAAAAAAAAAAAADoEQAQFr/fmt.webp'

const icon1Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/wF0aRYXHJYQAAAAAAAAAAAAADoEQAQFr/original';
const icon1Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/y0d7RaMUp3MAAAAAAAAAAAAADoEQAQFr/original';

const icon2Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/GFR1QKB9oLEAAAAAAAAAAAAADoEQAQFr/original';
const icon2Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/MUY2SKAUDN8AAAAAAAAAAAAADoEQAQFr/original';

const icon3Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/ublASKWCoCsAAAAAAAAAAAAADoEQAQFr/original';
const icon3Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/SpnxRLyYUI8AAAAAAAAAAAAADoEQAQFr/original';

const icon4Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/2ccdRLZwLdAAAAAAAAAAAAAADoEQAQFr/fmt.webp';
const icon4Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/kMErRLYmniEAAAAAAAAAAAAADoEQAQFr/fmt.webp';

const icon5Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/gdJFRppwDWQAAAAAAAAAAAAADoEQAQFr/original';
const icon5Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/Oy5tSKE-DYwAAAAAAAAAAAAADoEQAQFr/original';

const icon6Light = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/v2FXQ5zpGfkAAAAAAAAAAAAADoEQAQFr/original';
const icon6Dark = 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/iFYgR7GDoksAAAAAAAAAAAAADoEQAQFr/original';

const useStyle = ({
  isDark,
  isMobile,
 }) => {

  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    mainContainer: css`
      width: 100%;
      height: 662px;
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
      padding-top: 60px;

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
      width: 100%;
      height: 602px;
      position: relative;
    `,
    featureContentMainImg: css`
      height: 602px;
      z-index: 90;
      position: absolute;
      right: 0;
      top: 0;
      pointer-events: none;
    `,
    featureIcon1: css`
      position: absolute;
      z-index: 100;
      right: 610px;
      bottom: 170px;
      width: 84px;
      pointer-events: none;
    `,
    featureIcon2: css`
      position: absolute;
      z-index: 100;
      top: 200px;
      right: 0px;
      width: 166px;
      pointer-events: none;
    `,
    featureIcon3: css`
      position: absolute;
      z-index: 100;
      right: 700px;
      top: 246px;
      width: 44px;
      pointer-events: none;
    `,
    featureIcon4: css`
      position: absolute;
      z-index: 90;
      right: 0px;
      top: 150px;
      width: 715px;
      pointer-events: none;
    `,
    featureIcon4Light: css`
      position: absolute;
      z-index: 90;
      right: 10px;
      top: 150px;
      width: 690px;
      pointer-events: none;
    `,
    featureIcon5: css`
      position: absolute;
      z-index: 100;
      right: 150px;
      top: 0px;
      width: 90px;
      pointer-events: none;
    `,
    featureIcon6: css`
      position: absolute;
      z-index: 80;
      right: 520px;
      top: -10px;
      width: 106px;
      pointer-events: none;
    `,
    actionWrap: css`
      position: absolute;
      text-align: left;
      top: 192px;
      left: 100px;
      z-index: 80;

      @media (max-width: 900px) {
        right: 24px;
        text-align: center;
        left: 24px;
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

const actionHref = {
  'zh-CN': {
    quickStart: '/guide/quick-start',
    tryComponent: '/components/overview',
  },
  'en': {
    quickStart: '/guide/quick-start-en',
    tryComponent: '/components/overview-en',
  }
}

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
            rotateXMax={0.5}
            rotateYMax={0.5}
          >
            <img
              css={style.featureContentMainImg}
              src={isDark ? contentDark : contentLight}
              data-atropos-offset={0.5}
            />

            <img
              css={style.featureIcon1}
              src={isDark ? icon1Dark : icon1Light}
              data-atropos-offset={20}
            />
            <img
              css={style.featureIcon2}
              src={isDark ? icon2Dark : icon2Light}
              data-atropos-offset={18}
            />
            <img
              css={style.featureIcon3}
              src={isDark ? icon3Dark : icon3Light}
              data-atropos-offset={16}
            />
            <img
              css={isDark ? style.featureIcon4 : style.featureIcon4Light}
              src={isDark ? icon4Dark : icon4Light}
              data-atropos-offset={2}
            />
            <img
              css={style.featureIcon5}
              src={isDark ? icon5Dark : icon5Light}
              data-atropos-offset={14}
            />
            <img
              css={style.featureIcon6}
              src={isDark ? icon6Dark : icon6Light}
              data-atropos-offset={12}
            />
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
              href={actionHref[lang.key].quickStart}
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
              href={actionHref[lang.key].tryComponent}
            >
              {lang.try}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
