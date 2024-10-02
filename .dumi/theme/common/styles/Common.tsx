import { css, Global } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

export default () => {
  const {
    token: { colorText, fontSize, fontFamily, lineHeight, colorBgContainer, anchorTop }
  } = useSiteToken();

  return (
    <Global
      styles={css`
        html {
          direction: initial;
          height: 100%;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          height: 100%;
          overflow-x: hidden;
          color: ${colorText};
          font-size: ${fontSize}px;
          font-family: ${fontFamily};
          line-height: ${lineHeight};
          background: ${colorBgContainer};
          transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        #root {
          min-height: 100%;
        }
        [id] {
          scroll-margin-top: ${anchorTop}px;
        }

        [data-prefers-color='dark'] {
          color-scheme: dark;
        }

        [data-prefers-color='light'] {
          color-scheme: light;
        }
      `}
    />
  );
};
