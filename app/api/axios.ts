/*Интерсептор (interceptor) - это функция, которая перехватывает и 
обрабатывает запросы и ответы, которые отправляются и получаются в 
рамках приложения или API.*/
import axios from 'axios'

import { getContentType } from '../utils/api.utils'

export const API_URL = `${process.env.API_URL}/api`

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})
