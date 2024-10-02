import { TinyColor } from '@ctrl/tinycolor';
import { css } from '@emotion/react';
import RcFooter from 'rc-footer';
import cloneDeep from 'lodash.clonedeep';
import getAlphaColor from 'antd/lib/theme/util/getAlphaColor';
import { useContext, useCallback } from 'react';
import { type FC } from 'react';
import type { FooterColumn } from 'rc-footer/lib/column';
import useSiteToken from '../../hooks/useSiteToken';
import useLocaleValue from '../../hooks/useLocaleValue';
import SiteContext from '../SiteContext';
import type { SiteContextProps } from '../SiteContext';

const useStyle = () => {
  const { token } = useSiteToken();
  const footerLinks = useLocaleValue('footerLinks');
  const { isMobile } = useContext<SiteContextProps>(SiteContext);
  const background = new TinyColor(getAlphaColor('#f0f3fa', '#fff'))
    .onBackground(token.colorBgContainer)
    .toHexString();

  return {
    holder: css`
      background: ${background};
    `,

    footer: css`
      background: ${background};
      color: ${token.colorTextSecondary};
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: ${token.colorText};
      }

      .rc-footer-column {
        margin-bottom: ${isMobile ? 60 : 0}px;
        :last-child {
          margin-bottom: ${isMobile ? 20 : 0}px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        display: ${Array.isArray(footerLinks) && footerLinks.length > 0 ? 'block' : 'none'};
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: ${token.marginXXL}px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: ${token.fontSize}px;
        }
      }
    `
  };
};

const Footer: FC = () => {
  const style = useStyle();
  const footer = useLocaleValue('footer');
  const footerLinks = useLocaleValue('footerLinks');

  const getFooterLinks = useCallback((links: FooterColumn[]) => {
    if (Array.isArray(links)) {
      links.forEach((item) => {
        const iconUrl = item.icon;
        if (item.icon) {
          // eslint-disable-next-line no-param-reassign
          delete item.icon;
          // eslint-disable-next-line no-param-reassign
          item.icon = <img src={String(iconUrl)} alt="" style={{ maxWidth: '100%' }} />;
        }
        if (Array.isArray(item.items)) {
          getFooterLinks(item.items);
        }
      });
    }
    return links;
  }, []);

  if (!footer) return null;
  return (
    <RcFooter
      columns={getFooterLinks(cloneDeep(footerLinks))}
      css={style.footer}
      bottom={
        <span
          dangerouslySetInnerHTML={{
            __html: footer
          }}
        />
      }
    />
  );
};

export default Footer;
