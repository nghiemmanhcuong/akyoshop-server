const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products',
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    sale: {
        type: Number,
        required: false,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: Array,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    times: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('carts', cartSchema);
