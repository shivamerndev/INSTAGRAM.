import { model, Schema } from "mongoose";

const followSchema = new Schema({
    follower: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    followee: {
        type: Schema.Types.ObjectId,
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
followSchema.index({ follower: 1, followee: 1 }, { unique: true });

export default model("Follow", followSchema);