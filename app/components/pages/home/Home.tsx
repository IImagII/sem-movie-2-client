import { FC } from 'react'

import Layout from '../../layout/Layout'

import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'

const Home: FC = () => {
  return (
    <Layout title="My own application sem-video | Видеохостинг">
      <Discover />
      <Catalog />
    </Layout>
  )
}

export default Home
