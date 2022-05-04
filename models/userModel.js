const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        firstName: {
            type: String,
            required: false,
            maxLength: 255,
        },
        lastName: {
            type: String,
            required: false,
            maxLength: 255,
        },
        phoneNumber: {
            type: Number,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        role: {
            type: String,
            required: false,
            enum: ['admin', 'salesman', 'customer'],
        },
        cart: {
            type: Array,
            required: false,
            default: [String],
        },
    },
    {timestamp: true},
);

module.exports = mongoose.model('users', userModel);
