import { css } from '@emotion/react';
import { Carousel, Typography } from 'antd';
import { useContext, type FC } from 'react';
import useLocaleValue from '../../../../hooks/useLocaleValue';
import useSiteToken from '../../../../hooks/useSiteToken';
import SiteContext from '../../../../slots/SiteContext';
import { type IFeature } from '../../../../types';

const useStyle = () => {
  const { token } = useSiteToken();
  return {
    carousel: css`
      .slick-dots.slick-dots-bottom {
        bottom: -22px;
        li {
          width: 6px;
          height: 6px;
          background: #e1eeff;
          border-radius: 50%;
          button {
            height: 6px;
            background: #e1eeff;
            border-radius: 50%;
          }
          &.slick-active {
            background: #4b9cff;
            button {
              background: #4b9cff;
            }
          }
        }
      }
    `,
    container: css`
      display: flex;
      flex-wrap: wrap;
      max-width: 1208px;
      margin-inline: auto;
      box-sizing: border-box;
      padding-inline: 2.5%;
      column-gap: 2.5%;
      align-items: stretch;
      text-align: start;
    `,
    itemBase: css`
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-decoration: none;
      background: ${token.colorBgContainer};
      border: ${token.lineWidth}px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG}px;
      transition: all ${token.motionDurationSlow};
      padding-block: ${token.padding}px;
      padding-inline: ${token.padding}px;
      margin-block-end: ${token.margin}px;
      box-sizing: border-box;
    `,
    cardItem: css`
      width: 30%;
      &:hover {
        box-shadow: ${token.boxShadowCard};
      }
    `,
    sliderItem: css`
      margin: 0 ${token.margin}px;
      text-align: start;
    `
  };
};

const RecommendItem = ({ title, details, itemCss }: IFeature) => {
  const style = useStyle();

  return (
    <div css={[style.itemBase, itemCss]}>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Paragraph
        type="secondary"
        style={{
          flex: 'auto'
        }}
      >
        {details}
      </Typography.Paragraph>
    </div>
  );
};

const Features: FC = () => {
  const styles = useStyle();
  const { isMobile } = useContext(SiteContext);
  const features = useLocaleValue('features');

  return (
    <div>
      {isMobile ? (
        <Carousel css={styles.carousel}>
          {Array.isArray(features) &&
            features?.map((item, index) => (
              <RecommendItem key={index} {...item} itemCss={styles.sliderItem} />
            ))}
        </Carousel>
      ) : (
        <div css={styles.container}>
          {Array.isArray(features) &&
            features?.map((item, index) => (
              <RecommendItem key={index} {...item} itemCss={styles.cardItem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Features;
