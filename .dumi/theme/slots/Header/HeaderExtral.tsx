import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Tooltip } from 'antd';
import { type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';

const BASE_SIZE = '1.2em';

const useStyle = () => {
  const { token } = useSiteToken();
  const { controlHeight, motionDurationMid } = token;

  return {
    btn: css`
      color: ${token.colorText};
      border-color: ${token.colorBorder};
      padding: 0 !important;
      width: ${controlHeight}px;
      height: ${controlHeight}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: ${token.borderRadius}px;
      transition: all ${motionDurationMid};
      cursor: pointer;

      .btn-inner {
        transition: all ${motionDurationMid};
      }

      &:hover {
        background: ${token.colorBgTextHover};
      }

      img {
        width: ${BASE_SIZE};
        height: ${BASE_SIZE};
      }

      .anticon {
        font-size: ${BASE_SIZE};
      }
    `
  };
};

const HeaderExtra: FC = () => {
  const { github, socialLinks } = useAdditionalThemeConfig();
  const style = useStyle();
  return (
    <div>
      {github || socialLinks?.github ? (
        <Tooltip title="Github">
          <a key="github" href={github || socialLinks?.github} target="_blank" rel="noreferrer">
            <button css={[style.btn]} type="button">
              <GithubOutlined />
            </button>
          </a>
        </Tooltip>
      ) : null}
    </div>
  );
};

export default HeaderExtra;
