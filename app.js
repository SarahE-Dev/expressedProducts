const express = require('express');
const logger = require('morgan');
const uuidv4 = require('uuid').v4;
const productRouter = require('./routers/productRouter');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use('/api/product', productRouter);


app.listen(3000, ()=>{
    console.log('Server started on port 3000.');
})

