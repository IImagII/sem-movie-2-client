import { FC } from 'react'

import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'

export interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <Search />
      <IconsRight />
    </header>
  )
}

export default Header
