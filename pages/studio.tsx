import { NextPageAuth } from '@/app/providers/private-route.interface'

const StudioPage: NextPageAuth = () => {
  return <div>studio</div>
}

//так мы сделали защищенный роут такой записью
//тут мы сделали так что эта страница доступна только для авторизированных через провайдер
StudioPage.isOnlyUser = true

export default StudioPage
