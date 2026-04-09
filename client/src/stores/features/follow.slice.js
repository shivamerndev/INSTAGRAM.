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
        setFollowers: ({ followers }, { payload }) => {
            followers = payload;
        },
        setFollowings: ({ followings }, { payload }) => {
            followings = payload;
        },
        setRequested: ({ requested }, { payload }) => {
            requested = payload;
        },
        setFollowBtn: (state, { payload }) => {
            state.followBtn = payload;
        }
    }
})

export const { setFollowers, setFollowings, setRequested, setFollowBtn } = followSlice.actions;
export default followSlice.reducer;