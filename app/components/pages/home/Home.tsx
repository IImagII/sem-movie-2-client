import { FC } from 'react'

import Layout from '../../layout/Layout'

import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'
import { IHome } from './home.interface'
import { IVideo } from '@/app/types/video.interface'

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
  return (
    <Layout title="My own application sem-video | Видеохостинг">
      <Discover />
      <Catalog />
    </Layout>
  )
}

export default Home
