const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class authController {
    // get user
    // [POST]api/auth/get
    async getUser(req, res) {
        try {
            const user = await userModel.findOne({_id: req.userId});
            const {password, ...other} = user._doc;
            res.status(200).json({
                success: true,
                user: other,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // register
    // [POST]api/auth/register
    async register(req, res) {
        const {email, password} = req.body;
        if (!email || !password) {
            res.status(403).json({
                success: false,
                message: 'Bạn Chưa Nhập Email Hoặc Mật Khẩu!',
            });
        }
        try {
            const user = await userModel.findOne({email: email});
            if (user) {
                res.status(403).json({
                    success: false,
                    message: 'Email Đã Có Người Đăng Ký Vui Lòng Chọn Email Khác!',
                });
            } else {
                const salt = await bcrypt.genSalt(Number(process.env.PASSWORD_SALT));
                const hashPassword = await bcrypt.hash(password, salt);

                const newUser = new userModel({
                    email: req.body.email,
                    password: hashPassword,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address,
                    role: req.body.role,
                });
                await newUser.save();
                res.status(200).json({
                    success: true,
                    message: 'Đăng Ký Thành Công',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // login
    // [POST]api/auth/login
    async login(req, res) {
        const {email, password} = req.body;
        if (!email || !password) {
            res.status(403).json({
                success: false,
                message: 'Missing email or password!',
            });
        }

        try {
            const user = await userModel.findOne({email: email});
            if (user) {
                bcrypt.compare(password, user.password, (error, result) => {
                    if (result === false || error) {
                        res.status(403).json({
                            success: false,
                            message:
                                'Tài Khoản Hoặc Mật Khẩu Không Chính Xác! Vui Lòng Nhập Lại!!!',
                        });
                    } else {
                        const accessToken = jwt.sign(
                            {
                                userId: user._id,
                            },
                            process.env.ACCESS_TOKEN
                        );
                        res.status(200).json({
                            success: true,
                            message: 'login successfully!',
                            accessToken,
                        });
                    }
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: 'Tài Khoản Hoặc Mật Khẩu Không Chính Xác! Vui Lòng Nhập Lại!!!',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = new authController();
