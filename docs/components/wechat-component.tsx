import React from 'react';
import wechatConfig from '../../config/wechat.json';

export default () => {
  return (
    <div>
      <ul>
        {wechatConfig.src
          .filter((o) => {
            return !['_util', 'mixins', 'style', 'ImageIcon'].includes(o);
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
