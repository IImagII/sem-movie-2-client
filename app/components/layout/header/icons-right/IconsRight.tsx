import { FC } from 'react'

import styles from './IconsRight.module.scss'
import { useAuth } from '@/app/hooks/useAuth'

const IconsRight: FC = () => {
  const { user } = useAuth() //так проверяем атворизацию

  return <div className={styles.icons}>sdaf</div>
}

export default IconsRight
