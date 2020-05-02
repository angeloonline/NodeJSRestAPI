import mongoose from 'mongoose'


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Post = mongoose.model('Post', postSchema)

export default Post