import { model, Schema } from "mongoose";

const followSchema = new Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

// prevent duplicate follow
followSchema.index({ follower: 1, following: 1 }, { unique: true });

export const Follow = model("Follow", followSchema);