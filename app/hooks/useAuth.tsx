import { IAuthData } from '@/services/auth/auth.helper'

export const useAuth = (): IAuthData => ({
  //тут : IAuthData это мы указали что мы должны возвращать
  //   ({-такой записью мы показываем что мы хотимвозвращать
  user: null,
  accessToken: ''
})
