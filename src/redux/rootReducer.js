import {configureStore} from '@reduxjs/toolkit'
import dailyReducer from './daily/dailyReducer'

export default configureStore({
    reducer: {
        dailyReducer: dailyReducer,
    },
})