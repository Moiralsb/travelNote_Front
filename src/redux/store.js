import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'
import TestReducer from "./reducers/TestReducer"

const reducer = combineReducers({
  TestReducer,
})
// const store = configureStore({reducer})

// 浏览器插件配置
const store = configureStore({reducer}, composeWithDevTools(applyMiddleware(thunk)))

export default store
