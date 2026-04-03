import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        media: [
            {
                url: {
                    type: String,
                    required: true,
                },
                mediaType: {
                    type: String,
                    enum: ['image', 'video'],
                    required: true,
                },
            },
        ],
        caption: {
            type: String,
            maxlength: 500,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        views: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                viewedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        expiresAt: {
            type: Date,
            default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
            index: { expireAfterSeconds: 0 },
        },
    },
    { timestamps: true }
);

export default mongoose.model('Story', storySchema);