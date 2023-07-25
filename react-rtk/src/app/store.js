
import {configureStore} from "@reduxjs/toolkit"
// const reduxLogger = require('redux-logger')

import cakeReducer from "../feature/cake/cakeSlice"
import iceCreamReducer from "../feature/icecream/icecreamSlice"
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')

// const logger = reduxLogger.createLogger()
import userReducer from "../feature/user/userSlice"

 const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
        user:userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;