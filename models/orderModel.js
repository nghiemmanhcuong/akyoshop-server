const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    cart: {
        type: Array,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
},{timestamps:true});

module.exports = mongoose.model('orders', orderModel);
