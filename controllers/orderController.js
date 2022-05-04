const orderModel = require('../models/orderModel');

class orderController {
    // add order
    // [POST]/api/order/add
    async addOrder(req, res) {
        try {
            const newOrder = new orderModel({
                user: req.body.userId,
                cart: req.body.cart,
                name: req.body.name,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
            });

            await newOrder.save();
            res.status(200).json({
                success: true,
                message: 'Order added successfully',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new orderController();
