const express = require ('express');
const app = express();
const morgan = require('morgan');


const productRoutes = require('./Api/routes/products.js');
const orderRoutes = require('./Api/routes/orders.js');

app.use(morgan('dev'));

//Routes handeling request //medelwares
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status= 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;
