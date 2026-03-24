import { model, Schema } from 'mongoose';

const likeSchema = new Schema({

    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
}, { timestamps: true });

// Compound index to ensure a user can only like a post once
likeSchema.index({ post: 1, user: 1 }, { unique: true });

export default model('Like', likeSchema);