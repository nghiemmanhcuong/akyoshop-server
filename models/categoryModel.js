const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryModel = Schema({
    name: {
        type: String,
        required: true,
    },
    childrenName: {
        type: Array,
        required: false,
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
    },
});

module.exports = mongoose.model('category', categoryModel);
