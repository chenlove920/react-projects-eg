import { configureStore } from "@reduxjs/toolkit";
import testStoreReducer from './modules/testStore'

const store = configureStore({
    reducer: {
        testStore: testStoreReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store