import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    followers: [],
    followings: [],
    requested: []
}

const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        setFollowers: ({ followers }, { payload }) => {
            followers = payload;
        },
        setFollowings: ({ followings }, { payload }) => {
            followings = payload;
        },
        setRequested: ({ requested }, { payload }) => {
            requested = payload;
        }
    }
})

export { setFollowers, setFollowings, setRequested } from followSlice.actions;
export default followSlice.reducer;