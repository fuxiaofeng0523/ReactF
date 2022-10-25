import React from 'react'
import styles from './index.module.scss'
export default function HotItem(props: any) {
  return (
    <a
      href='/#'
      className={styles.hotItem}>
      <div className={styles.imgBox}>
        <img
          // src={props.img}
          src={require('../../mock/img/' + props.img)}
          alt=''
        />
      </div>
      <div className={styles.title}>{props.children}</div>
    </a>
  )
}
