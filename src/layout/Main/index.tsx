import React from 'react'
import Module from '../../components/Moudle'
import HotItem from '../../components/HotItem'
import styles from './index.module.scss'

const IMG_DATA = [
  {
    id: '001',
    img: '00858VDpgy1h6re1xb2fsj30go0nlgos.jpg',
    name: '想要成为影之实力者'
  },
  {
    id: '002',
    img: '0082dDRogy1h6q6y2ji38j31jk26je84.jpg',
    name: '间谍过家家Part2'
  },
  {
    id: '003',
    img: '0082dDRogy1h6l75lppl4j313x1kvn0u.jpg',
    name: '后宫之乌'
  }
]
export default function Main() {
  return (
    <div className={styles.main}>
      <Module
        title={'正在热映'}
        className={styles.hotItem}>
        {/* <HotItem img={'../../mock/img/00858VDpgy1h6re1xb2fsj30go0nlgos.jpg'}>
          想要成为影之实力者
        </HotItem> */}
        {IMG_DATA.map((item) => {
          return (
            <HotItem
              key={item.id}
              img={item.img}>
              {item.name}
            </HotItem>
          )
        })}
      </Module>
      <Module title={'日漫'}></Module>
    </div>
  )
}
