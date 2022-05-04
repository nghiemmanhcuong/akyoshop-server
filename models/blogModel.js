const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const blogSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    imgMain: {
        type:String,
        required: true,
    },
    imgDetail: {
        type: Array,
        default: [String],
    },
    dateSubmitted: {
        type: String,
        default: Date.now(),
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: Array,
        default: [String],
    },
    slug: {
        type: String,
        slug:'name',
        unique: true,
    }
});

module.exports = mongoose.model('blogs', blogSchema);
