import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { authSlice } from './auth/auth.slice'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  //  toastr: toastrReducer обязательно в конце иначе работать не будет
  toastr: toastrReducer
})
