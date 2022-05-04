const productModel = require('../models/productModel');

class productController {
    // get trouser
    // [GET]api/product/get-trouser
    async getTrouserProduct(req, res) {
        let perPage = 12;
        let page = req.query.page || 1;
        try {
            const products = await productModel
                .find({'type.main': 'quan-nu'})
                .skip(perPage * page - perPage)
                .limit(perPage);
            const count = await productModel.countDocuments({'type.main': 'quan-nu'});
            res.status(200).json({
                success: true,
                data: products,
                pages: Math.ceil(count / perPage),
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get shirst
    // [GET]api/product/get-shirst
    async getShirstProduct(req, res) {
        let perPage = 12;
        let page = req.query.page || 1;

        try {
            const products = await productModel
                .find({'type.main': 'ao-nu'})
                .skip(perPage * page - perPage)
                .limit(perPage);
            const count = await productModel.countDocuments({'type.main': 'quan-nu'});
            res.status(200).json({
                success: true,
                data: products,
                pages: Math.ceil(count / perPage),
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get product popular
    // [POST]api/product/popular-product
    async getPopularProduct(req, res) {
        try {
            const products = await productModel.find({isPopular: true});
            res.status(200).json({
                success: true,
                data: products,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get product new
    // [POST]api/product/new-product
    async getNewProduct(req, res) {
        try {
            const products = await productModel.find({isNewProduct: true});
            res.status(200).json({
                success: true,
                data: products,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get product by slug
    // [POST]api/product/get/:slug
    async getProductBySlug(req, res) {
        try {
            const product = await productModel.findOne({slug: req.params.slug});
            if (!product) {
                res.status(404).json({
                    success: false,
                    message: 'Product not found!',
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: product,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get product random
    // [POST]api/product/get-random
    async getProductRandom(req, res) {
        try {
            const products = await productModel.aggregate([{$sample: {size: 12}}]);
            res.status(200).json({
                success: true,
                data: products,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new productController();
