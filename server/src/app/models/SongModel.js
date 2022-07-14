import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        singer: {
            type: String,
        },
        path: String,
        image: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
)

export const SongModel = mongoose.model('Song', schema)
