const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const addminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(addminRouter);
app.use(shopRouter);
app.use('/',(req, res, next)=>
{
    res.status(404).send('<h1> Page Not Found');
});



app.listen(3000);