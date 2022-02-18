import React from 'react'
import styles from './home.less'

export default () => {
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Ant Design Mini</h1>
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
            src='https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*72wxQ7yN4tEAAAAAAAAAAAAAARQnAQ'
          />
        </div>
        {/* 新手指引 */}
        <div className={styles.group}>
          <p className={styles.groupTitle}>{'新手指引'}</p>
          <div className={styles.guidance}>
            <div className={styles.guidanceCard}>
              <div>
                <p>{'快速开始'}</p>
                <p>
                  {'安装依赖、引入组件，即可使用'}
                </p>
                <a href={'/guide/quick-start'}>
                  {'查看详情'} &gt;
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
                <a href={'/guide/faq'}>FAQ &gt;</a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/0e5fba68-b7d4-4170-9fe2-3b0c2ba6350a.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/* 底部导航 */}
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
                src="https://gw.alipayobjects.com/mdn/rms_e06820/afts/img/A*YzmtQ7jTWtAAAAAAAAAAAAAAARQnAQ"
                alt='ding-group'
                width={240}
              />
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>
          Open-source MIT Licensed
          {' | '}
          Copyright © 2016-present Alipay.com
          {' | '}
          Powered by{' '}
          <a href='http://d.umijs.org' target='_blank'>
            dumi
          </a>
        </div>
      </div>
    </div>
  )
}

const footerGroups = [
  {
    title: 'Ant Design Mini',
    items: [
      {
        title: 'GitHub',
        link: 'https://github.com/ant-design/ant-design-mini',
      },
      {
        title: '发布日志',
        link: 'https://github.com/ant-design/ant-design-mini/releases',
      },
      {
        title: '参与贡献',
        link: 'https://github.com/ant-design/ant-design-mini/blob/main/.github/contributing.md',
      },
      {
        title: '提问与反馈',
        link: 'https://github.com/ant-design/ant-design-mini/issues/new/choose',
      },
    ],
  },
  {
    title: 'Ant Design',
    items: [
      { title: 'Ant Design - 桌面端组件库', link: 'https://ant.design' },
      {
        title: 'Ant Design Mobile - 移动端组件库',
        link: 'https://mobile.ant.design',
      },
      {
        title: 'Ant Design Pro - 中台解决方案',
        link: 'https://pro.ant.design',
      },
      { title: 'Ant Motion - 设计动效', link: 'https://motion.ant.design' },
      { title: 'Ant Design Charts', link: 'https://charts.ant.design/' },
    ],
  },
  {
    title: '更多产品',
    items: [
      { title: 'Dumi - 组件/文档研发工具', link: 'https://d.umijs.org' },
      { title: 'Kitchen - Sketch 工具集', link: 'https://kitchen.alipay.com' },
      { title: 'AntV - 蚂蚁数据可视化方案', link: 'https://antv.vision' },
      { title: 'Egg - 企业级 Node Web 开发框架', link: 'https://eggjs.org' },
    ],
  },
]