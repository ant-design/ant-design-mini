import React from 'react';
import { DocSearch } from '@docsearch/react';
import Main from './components/Main';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import '@docsearch/css';
import styles from './home.local.less';

export default () => {
  return (
    <div className={styles.homePage}>
      <Main />
      {/* <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
      /> */}
      {/* <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.title}>
              <img src={"https://gw.alipayobjects.com/zos/bmw-prod/a6c49477-1376-46d3-bcc0-8d0459c8c475.svg"} width={289} height={46}>
              </img>
            </div>
            <p className={styles.description}>
              {'支付宝小程序 UI 组件库'}
            </p>
            <p className={styles.buttons}>
              <a href={'/guide/quick-start'}>
                {'开始使用'}
              </a>
              <a href={'/components'}>
                {'组件列表'}
              </a>
            </p>
          </div>
          <img
            className={styles.headerImage}
            alt='header-image'
            src='https://gw.alipayobjects.com/zos/bmw-prod/b7b7baab-2b0e-4a38-bbb8-b0e1f74b14ff.svg'
          />
        </div>
        <div className={styles.group}>
          <p className={styles.groupTitle}>{'新手指引'}</p>
          <div className={styles.guidance}>
            <div className={styles.guidanceCard}>
              <div>
                <p>{'快速开始'}</p>
                <p style={{height: "52px"}}>
                  {'安装依赖、引入组件，即可使用'}
                </p>
                <a href={'/guide/quick-start'}>
                  {'查看详情'} 
                  <div style={{display: "inline-block", width: "16px", height: "16px", backgroundImage: 'url(https://gw.alipayobjects.com/zos/bmw-prod/5f07b426-aa80-47ea-9ad5-9f795deb5556.svg)'}}></div>
                </a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/541d8987-2040-40d9-a36c-9f37a2bed91e.svg'
                alt=''
              />
            </div>
            <div className={styles.guidanceCard}>
              <div>
                <p>{'常见问题'}</p>
                <p>
                  {'我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下'}
                </p>
                <a href={'/guide/faq'}>FAQ
                <div style={{display: "inline-block", width: "16px", height: "16px", backgroundImage: 'url(https://gw.alipayobjects.com/zos/bmw-prod/5f07b426-aa80-47ea-9ad5-9f795deb5556.svg)'}}></div>
                </a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/0e5fba68-b7d4-4170-9fe2-3b0c2ba6350a.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}