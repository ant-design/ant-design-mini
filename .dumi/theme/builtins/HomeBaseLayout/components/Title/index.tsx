import { css } from '@emotion/react';
import useSiteToken from "../../../../../theme/hooks/useSiteToken";

const useStyle = ({ isDark }) => {
  const { token } = useSiteToken();
  const { fontFamily } = token;
  return {
    container: css`
      text-align: center;
    `,
    title: css`
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      font-size: 34px;
      margin-bottom: 4px;
    `,
    subTitle: css`
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      font-size: 16px;
      color: ${isDark ? '#808080' : '#697A8C'};
    `,
  };
};
export default ({ title, subTitle, isDark , children }) => {
  const style = useStyle({ isDark });

  return (
    <div css={style.container}>
      <h2 css={style.title}>{title}</h2>
      <div css={style.subTitle}>{subTitle}</div>
      { children }
    </div>
  )
}
