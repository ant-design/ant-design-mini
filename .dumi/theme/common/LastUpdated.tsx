// 最后更新时间
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { FormattedMessage } from 'dumi';
import { ClockCircleOutlined } from '@ant-design/icons';
import useSiteToken from '../hooks/useSiteToken';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';

const useStyle = () => {
  const { token } = useSiteToken();

  const { colorTextTertiary, marginXXS } = token;

  return {
    lastUpdatedWrap: css`
      color: ${colorTextTertiary};
      display: flex;
    `,
    lastUpdatedLabel: css`
      margin-inline-start: ${marginXXS}px;
      margin-inline-end: ${marginXXS}px;
    `
  };
};

const LastUpdated: React.FC<{ time?: number }> = ({ time }) => {
  const styles = useStyle();
  const { lastUpdated } = useAdditionalThemeConfig();
  const [isoLastUpdated, setIsoLastUpdated] = useState('');
  const [lastUpdatedTime, setLastUpdatedTime] = useState('');
  const showLastUpdated = lastUpdated && time;

  useEffect(() => {
    if (showLastUpdated) {
      setIsoLastUpdated(new Date(time!).toISOString());
      setLastUpdatedTime(
        new Intl.DateTimeFormat(undefined, {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(time)
      );
    }
  }, [showLastUpdated, time]);

  return lastUpdated && time ? (
    <div css={styles.lastUpdatedWrap}>
      <ClockCircleOutlined />
      <span css={styles.lastUpdatedLabel}>
        <FormattedMessage id="content.footer.last.updated" />
      </span>
      <time dateTime={isoLastUpdated}>{lastUpdatedTime}</time>
    </div>
  ) : null;
};

export default LastUpdated;
