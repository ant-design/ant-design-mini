import React from 'react';
import wechatConfig from '../../config/wechat.json';

const WechatComponent: React.FC = () => {
  return (
    <div>
      <ul>
        {wechatConfig.src
          .filter((o) => {
            return ![
              '_util',
              'mixins',
              'style',
              'ImageIcon',
              '_locale',
              'Mask',
              'Pagination',
            ].includes(o);
          })
          .map((o) => {
            return (
              <li style={{ padding: 4 }}>
                <a href={`/components/${o.toLocaleLowerCase()}`}>{o}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WechatComponent;
