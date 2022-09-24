import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const apiKeySlice = createSlice({
    name: 'apiKey',
    initialState,
    reducers: {
        setApiKey: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setApiKey } = apiKeySlice.actions

export default apiKeySlice.reducer
