import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import SideBAr from './sidebar/SideBar'

//работать будеттолько с пропсом PropsWithChildren так children виден не будет
export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-wrap">
        <SideBAr />
        <section className="w-1/5">
          <Header />
          <div className="pl-6 pr-8">{children}</div>
        </section>
      </main>
    </>
  )
}

export default Layout
