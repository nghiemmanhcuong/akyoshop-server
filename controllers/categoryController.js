const categoryModel = require('../models/categoryModel');

class categoryController {
    //post category
    //[POST]category/post
    async postCategory(req, res) {
        try {
            const newCategory = new categoryModel(req.body);
            await newCategory.save();
            res.status(200).json({
                success: true,
                message: 'Category saved successfully!',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //get category
    //[GET]category/get
    async getCategory(req, res) {
        try {
            const category = await categoryModel.find();
            res.status(200).json({
                success: true,
                message: 'successfully!',
                category: category,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new categoryController();
