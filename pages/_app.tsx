import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import ReduxToastredLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import '../app/styles/globals.scss'

import { persistor, store } from '@/app/store/store'

//тут делаются все обороты
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* nextjs-progressbar - это сторонняя библиотека, которая предоставляет 
      простой и легковесный способ добавления прогресс-бара на страницы вашего 
      приложения Next.js. */}
      <NextProgressBar
        color="#ff7652"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />

          {/* библиотека уведомлений */}
          <ReduxToastredLib
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            timeOut={4000}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
        </PersistGate>
      </Provider>
    </>
  )
}
