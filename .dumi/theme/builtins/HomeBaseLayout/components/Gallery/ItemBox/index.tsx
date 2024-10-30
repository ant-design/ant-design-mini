import { css } from '@emotion/react';
import useSiteToken from "../../../../../../theme/hooks/useSiteToken";
import useLocaleValue from "../../../../../../theme/hooks/useLocaleValue";
import { Tag } from 'antd';

const useStyle = ({
  isDark,
  isMobile,
 }) => {

  const { token } = useSiteToken();
  const { fontFamily } = token;

  return {
    container: css`
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      background: ${
        isDark ?
          '#26272e' :
          'linear-gradient(105deg, #f5f8ffcc 8%, #f2f5fccc 37%, #e7f0fecc 71%, #e6effecc 107%)'
      };
      border-radius: 8px;
      height: 380px;
      padding: 24px;
      margin-right: 24px;
      margin-bottom: 24px;
      padding-left: 24px;
      padding-right: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      flex-wrap: wrap-all;

      &:last-of-type {
        margin-right: 0;
      }

      @media (max-width: 1400px) {
        width: 46%;
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }

      @media (max-width: 600px) {
        width: 100%;
        margin-right: 24px;
        margin-left: 24px;
        &:nth-of-type(2n) {
          margin-right: 24px;
        }
      }
    `,
    titleWrap: css`
      display: flex;
      align-items: center;
    `,
    title: css`
      font-size: 20px;
      font-weight: medium;
      margin-right: 8px;
    `,
    imgWrap: css`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    img: css`
      pointer-events: none;
    `
  };
};

export default ({
  children,
  data,
  isDark,
  isMobile,
}) => {
  const style = useStyle({
    isDark,
    isMobile,
  });

  return (
    <div css={style.container}>
      <div css={style.titleWrap}>
        <span css={style.title}>
          {data.title}
        </span>
        <Tag
          color={data.isNew ? 'blue' : 'orange'}
        >
          {data.tag}
        </Tag>
      </div>
      <div css={style.imgWrap}>
        <img
          css={style.img}
          src={isDark ? data.dark : data.light}
          width={data.width}
        />
      </div>
    </div>
  )
}
