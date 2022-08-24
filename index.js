const express = require('express');
// const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database/connect');

const authRouter = require('./routes/auth.route');
const cartRouter = require('./routes/cart.route');
const productRouter = require('./routes/product.route');
const categoryRouter = require('./routes/category.route');
const blogRouter = require('./routes/blog.route');
const orderRouter = require('./routes/order.route');
const app = express();
const post = process.env.PORT || 5001;

// config
app.use('/assets', express.static('assets'));
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(morgan('combined'));

// routers
app.use('/api/auth', authRouter);
app.use('/api/cart', cartRouter);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blog', blogRouter);
app.use('/api/order', orderRouter);
// connect database
connectDB();

// listen app
app.listen(post, () => {
    console.log('server runing in post ' + post);
});
