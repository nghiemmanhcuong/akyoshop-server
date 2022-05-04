const blogSchema = require('../models/blogModel');

class blogController {
    // get blog
    // [GET]blog/get
    async getBlog(req, res) {
        let perPage = req.query.limit || 8;
        let page = req.query.page || 1;

        try {
            const blogs = await blogSchema
                .find({})
                .skip(perPage * page - perPage)
                .limit(perPage);
            const count = await blogSchema.countDocuments({});
            if (!blogs) {
                return res.status(404).json({
                    success: false,
                    message: 'No blog found!',
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: blogs,
                    pages: Math.ceil(count / perPage),
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get blog by slug
    // [GET]blog/get-detail
    async getBlogBySlug(req, res) {
        try {
            const blog = await blogSchema.findOne({slug: req.params.slug});
            if (!blog) {
                res.status(401).json({
                    success: false,
                    message: 'get failure!',
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: blog,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // get blog random
    // [GET]blog/get-random
    async getBlogRandom(req, res) {
        try {
            const blogRandom = await blogSchema.aggregate([{$sample: {size: 3}}]);
            res.status(200).json({
                success: true,
                data: blogRandom,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new blogController();
