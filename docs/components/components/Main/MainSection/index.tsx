import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Lottie from 'react-lottie';
import styles from './index.local.less';

export default () => {
  const [startFireAnimation, setStartFireAnimation] = useState(false);
  const [startResultAnimation, setStartResultAnimation] = useState(false);
  const [isWidthScreen, setIsWidthScreen] = useState(window?.screen?.width > 450);

  useEffect(() => {
    document.querySelector('#calendarImage')?.addEventListener('mouseenter', () => {
      setStartFireAnimation(true);
    });
    document.querySelector('#resultImage')?.addEventListener('mouseenter', () => {
      setStartResultAnimation(true);
    })
  }, []);

  useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      const myContainer = entries?.[0];
      if (myContainer.contentRect.width > 450) {
        setIsWidthScreen(true);
      } else {
        setIsWidthScreen(false);
      }
    });
    myObserver.observe(document.querySelector('#mainContainer') as Element);
    return () => {
      myObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainSectionContainer}>
      <div>
        <div className={styles.mainSectionTitle}>Ant Design Mini</div>
        <div className={styles.mainSectionDescription}>探索移动端 web 的体验极限</div>
        <div className={styles.mainSectionButtonAction}>
          <Button shape="round" className={styles.buttonLeft} href="/guide/quick-start">开始使用</Button>
          <Button shape="round" className={styles.buttonRight} href="/components">在线体验</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.calendarImage} id="calendarImage">
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
                    setStartFireAnimation(false);
                  }
                }]
              }
              height={startFireAnimation ? (isWidthScreen ? 324 : 172) : 0}
              width={startFireAnimation ? (isWidthScreen ? 324 : 172) : 0}
              isStopped={!startFireAnimation}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
        <div className={styles.resultImage} id="resultImage">
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              path: 'https://gw.alipayobjects.com/os/bmw-prod/9996aa6f-74ab-41f7-ada9-932a93afea12.json',
            }}
            eventListeners={
              [{
                eventName: 'complete',
                callback: () => {
                  setStartResultAnimation(false);
                }
              }]
            }
            height={isWidthScreen ? 117 : 70}
            width={isWidthScreen ? 94 : 56}
            isStopped={!startResultAnimation}
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <img
          className={styles.staticImage}
          src='https://gw.alipayobjects.com/zos/bmw-prod/e45aee8c-e00f-45a0-83a4-0e2da2784460.svg'
        ></img>
      </div>
    </div>
  )
}