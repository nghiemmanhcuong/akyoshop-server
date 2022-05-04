const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    const token = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({
            success: false,
            message: 'Access token not found!',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({
            error: error,
            success: false,
            message: 'Invalid token!',
        });
    }
};

module.exports = verifyToken;
