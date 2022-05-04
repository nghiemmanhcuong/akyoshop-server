const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');

class cartController {
    async getCart(req, res) {
        // get cart
        // [Get]/cart/get
        try {
            const cartList = await cartModel.find({userId: req.userId});
            if (cartList.length > 0) {
                res.status(200).json({
                    success: true,
                    data: cartList,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: [],
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // add to cart
    // [PUT]/cart/add-to-cart
    async addToCart(req, res) {
        try {
            const cart = await cartModel.findOne({
                productId: req.body.id,
                size: req.body.size,
                userId: req.userId,
            });
            if (cart && cart.size && cart.size === req.body.size) {
                res.status(200).json({
                    success: false,
                    message: 'Sản Phẩm Đã Có Trong Giỏi Hàng',
                });
            } else {
                const newCart = new cartModel({
                    userId: req.userId,
                    productId: req.body.id,
                    img: req.body.img,
                    name: req.body.name,
                    price: req.body.price,
                    sale: req.body.sale,
                    size: req.body.size,
                    color: req.body.color,
                    quantity: req.body.quantity,
                });
                await newCart.save();
                res.status(200).json({
                    success: true,
                    message: 'Đã Thêm Sản Phẩm Vào Giỏ Hàng!',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    async deleteInCart(req, res) {
        try {
            await cartModel.deleteOne({_id: req.params.id});
            res.status(200).json({
                success: true,
                message: 'Đã Xoá Sản Phẩm Khỏi Giỏ Hàng!',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    async deleteManyCart(req, res) {
        try {
            await cartModel.deleteMany({userId: req.userId});
            res.status(200).json({
                success: true,
                message: 'delete many successffly',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new cartController();
