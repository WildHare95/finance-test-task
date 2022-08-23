import { configureStore } from '@reduxjs/toolkit'
import quotasReducer from "./data/data-slice"
export const store = configureStore({
    reducer: {
        quotas: quotasReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch