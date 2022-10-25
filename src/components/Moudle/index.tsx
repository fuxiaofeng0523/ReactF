import React from 'react'
import styles from './index.module.scss'
export default function Module(props: any) {
  return (
    <div className={styles.Module}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={`${props.className}`}>
        <div>{props.children}</div>
      </div>
    </div>
  )
}
