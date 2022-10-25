import React from 'react'
import styles from './index.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src={require('../../asset/logo2.png')}
          alt=''
        />
      </div>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='今天你想看些什么呢？'
        />
        <button>镜</button>
      </div>
    </div>
  )
}
