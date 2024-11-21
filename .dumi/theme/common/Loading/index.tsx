import React, { useCallback } from 'react';
import { Skeleton, Space, Spin } from 'antd';
import { useLocation } from 'dumi';
import type { IAllThemeConfig } from '../../types';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';

const defaultLoadingConfig: IAllThemeConfig['loading'] = {
  skeleton: []
};

const Loading: React.FC = () => {
  const { pathname } = useLocation();
  const { loading = defaultLoadingConfig } = useAdditionalThemeConfig();

  const skeletonLoadingRenderRule = useCallback(() => {
    const pathnameReg = loading.skeleton;
    if (pathnameReg) {
      return (
        pathnameReg.filter((rule) => {
          return pathname.startsWith(rule);
        }).length > 0
      );
    }
    return false;
  }, [loading, pathname]);

  if (skeletonLoadingRenderRule()) {
    return (
      <div style={{ maxWidth: '70vw', width: '100%', margin: '80px auto 0', textAlign: 'center' }}>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width={40}
          alt="loading"
          style={{ marginBottom: 24, filter: 'grayscale(1)', opacity: 0.33 }}
        />
        <Skeleton active paragraph={{ rows: 3 }} />
        <Skeleton active paragraph={{ rows: 4 }} style={{ marginTop: 32 }} />
      </div>
    );
  }

  return (
    <Space style={{ width: '100%', margin: '120px 0', justifyContent: 'center' }} align="center">
      <Spin size="large" />
    </Space>
  );
};

export default Loading;
