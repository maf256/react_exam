// import UsersDetailsSlice from './user/UsersDetailsSlice'
import { configureStore } from '@reduxjs/toolkit'
import UsersDetailsSlice from './user/UsersDetailsSlice'

const store = configureStore({
    reducer: {
        usersDetails: UsersDetailsSlice,
    } 
})

export default store