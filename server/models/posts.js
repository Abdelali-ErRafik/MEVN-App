const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
    },
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Post', postSchema);