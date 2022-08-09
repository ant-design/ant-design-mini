import React from 'react';
import { footerGroups } from './config';
import styles from './index.local.less'

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        {footerGroups.map(group => (
          <ul key={group.title}>
            <li>{group.title}</li>
            {group.items.map(item => (
              <li key={item.title}>
                <a href={item.link} target='_blank'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        ))}

        <ul>
          <li>钉钉交流反馈群</li>
          <li>
            <img
              src="https://gw.alipayobjects.com/mdn/rms_402983/afts/img/A*y5XdQ6fdklYAAAAAAAAAAAAAARQnAQ"
              alt='ding-group'
              width={140}
            />
          </li>
        </ul>
      </div>

      <div className={styles.copyright}>
        © 2022 Made with ❤ by
        <a href='https://xtech.antfin.com' target='_blank'>
          XTech
        </a>
      </div>
    </div>
  )
}