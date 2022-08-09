import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Lottie from 'react-lottie';
import styles from './index.local.less';

export default () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    document.querySelector(`#publishDay`)?.addEventListener('mouseenter', () => {
      console.log('===', 111);
      setStartAnimation(true);
    })

  }, []);

  return (
    <div className={styles.mainSectionContainer}>
      <div>
        <div className={styles.mainSectionTitle}>Ant Design Mini</div>
        <div className={styles.mainSectionDescription}>探索移动端 web 的体验极限</div>
        <div className={styles.mainSectionButtonAction}>
          <Button shape="round" className={styles.buttonLeft}>开始使用</Button>
          <Button shape="round" className={styles.buttonRight}>在线体验</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.calendarImage}>
          <div className={styles.dayImage} id="publishDay">
            <div className={styles.publishDayAnimation}>
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  path: 'https://gw.alipayobjects.com/os/bmw-prod/6ddc2133-7421-44c2-b604-398a1a2732cd.json',
                }}
                eventListeners={
                  [{
                    eventName: 'complete',
                    callback: () => {
                      setStartAnimation(false);
                    }
                  }]
                }
                height={startAnimation ? 400 : 0}
                width={startAnimation ? 400 : 0}
                isStopped={!startAnimation}
              />
            </div>
          </div>
        </div>
        <img
          className={styles.staticImage}
          src='https://gw.alipayobjects.com/zos/bmw-prod/e45aee8c-e00f-45a0-83a4-0e2da2784460.svg'
        ></img>
      </div>
    </div>
  )
}