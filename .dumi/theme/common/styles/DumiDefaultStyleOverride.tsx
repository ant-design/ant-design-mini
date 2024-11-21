import { css, Global } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

const PREFERS_COLOR_ATTR = 'data-prefers-color';
const prefix = 'dumi-default';

export default () => {
  const { token } = useSiteToken();
  return (
    <Global
      styles={css`
        [${PREFERS_COLOR_ATTR}=dark] {
          .markdown {
            img {
              opacity: 0.8;
            }
          }
        }
        .dumi-theme-antd-root {
          .${prefix}-badge {
            &:not([type]),
            &[type='info'] {
              color: ${token.colorPrimary};
              background: ${token.colorPrimaryBg};
            }
            &[type='warning'] {
              color: ${token.colorWarning};
              background: ${token.colorWarningBg};
            }
            &[type='success'] {
              color: ${token.colorSuccess};
              background: ${token.colorSuccessBg};
            }
            &[type='error'] {
              color: ${token.colorError};
              background: ${token.colorErrorBg};
            }
          }
          .${prefix}-container.markdown {
            &[data-type='info'] {
              color: ${token.colorPrimary};
              background: ${token.colorPrimaryBg};
            }
            &[data-type='warning'] {
              color: ${token.colorWarning};
              background: ${token.colorWarningBg};
            }
            &[data-type='success'] {
              color: ${token.colorSuccess};
              background: ${token.colorSuccessBg};
            }
            &[data-type='error'] {
              color: ${token.colorError};
              background: ${token.colorErrorBg};
            }
          }
          .${prefix}-content-tabs {
              margin: 0 0 24px 0;
              padding: 0;
          }
        }
      `}
    />
  );
};
