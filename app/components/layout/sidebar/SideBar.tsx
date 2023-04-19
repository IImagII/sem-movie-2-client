import Link from 'next/link'
import { FC } from 'react'

import styles from './SideBar.module.scss'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'

export const SideBar: FC = () => {
  return (
    <aside className="py-5 px-7 w-1/5">
      <Link href="/" className="text-2xl font-semibold text-white">
        SemVideo
      </Link>

      <Menu title="Меню" items={menu} />

      <div className={styles.copy}>@ 2023 SemVideo Copyright</div>
    </aside>
  )
}

export default SideBar
