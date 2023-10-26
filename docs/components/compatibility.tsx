import React from 'react';
import { context } from 'dumi/theme';
import wechatConfig from '../../config/wechat.json';
import styles from './compatibility.local.less';

export default () => {
  const ctx = React.useContext(context);
  const filePath = (ctx.meta as any).filePath;
  if (!filePath) {
    return <></>;
  }
  const supportWechat = wechatConfig.src.some((item) => {
    return `src/${item}/index.md` === filePath;
  });

  return (
    <div className={styles.tags}>
      {<span className={styles.support}>支付宝小程序</span>}
      {supportWechat && (
        <span className={styles.support}>微信小程序(beta)</span>
      )}
    </div>
  );
};
