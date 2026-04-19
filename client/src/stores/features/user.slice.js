import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: null,
    loading: true,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setError, setLoading, setProfile } = userSlice.actions
export default userSlice.reducer;