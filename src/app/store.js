import { configureStore } from '@reduxjs/toolkit'
import apiKeyReducer from '../features/apiKey/apiKeySlice'

export const store = configureStore({
    reducer: {
        apiKey: apiKeyReducer
    },
})