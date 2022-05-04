const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const productModel = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: Array,
            required: true,
            default: [String],
        },
        type: {
            main: String,
            sub: String,
            required: false,
        },
        trademark: {
            type: String,
            required: false,
            default: 'NEM',
        },
        code: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        priceOld: {
            type: Number,
            required: false,
        },
        sale: {
            type: Number,
            required: false,
        },
        size: {
            type: Array,
            required: true,
            default: [String],
        },
        color: {
            type: Array,
            required: true,
            default: [String],
        },
        material: {
            type: String,
            required: false,
        },
        designs: {
            type: String,
            required: false,
        },
        fit: {
            type: String,
            required: false,
        },
        productLine: {
            type: String,
            required: false,
        },
        isNewProduct: {
            type: Boolean,
            required: false,
            default: false,
        },
        isPopular: {
            type: Boolean,
            required: false,
            default: false,
        },
        buyCouts: {
            type: Number,
            required: false,
            default: 0,
        },
        slug: {
            type: String,
            slug: 'name',
            unique: true,
        },
    },
    {timestamp: true},
);

module.exports = mongoose.model('products', productModel);
