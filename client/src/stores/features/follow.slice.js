import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    followers: [],
    followings: [],
    requested: [],
    followBtn: false
}

const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        setFollowers: (state, { payload }) => {
            state.followers = payload;
        },
        setFollowings: (state, { payload }) => {
            state.followings = payload;
        },
        setRequested: (state, { payload }) => {
            state.requested = payload;
        },
        setFollowBtn: (state, { payload }) => {
            state.followBtn = payload;
        }
    }
})

export const { setFollowers, setFollowings, setRequested, setFollowBtn } = followSlice.actions;
export default followSlice.reducer;
