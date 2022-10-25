import React from 'react'
import styles from './index.module.scss'

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavList}>
        <li>
          <a href='/#'>首页</a>
        </li>
        <li>
          <a href='/#'>日漫</a>
        </li>
        <li>
          <a href='/#'>剧场版</a>
        </li>
        <li>
          <a href='/#'>热搜</a>
        </li>
        <li>
          <a href='/#'>APP</a>
        </li>
      </ul>
      <div className={styles.right}>
        <div className={styles.history}>钟</div>
        <div className={styles.sreach}>镜</div>
      </div>
    </div>
  )
}
