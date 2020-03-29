//class
const Product = require('../model/product');

const path = require('path')
const rootDir = require('../util/path');

exports.getAddProductView = (req, res, next)=>
{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.getAllProducts = (req, res, next) =>
{
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
}

/* exports.getProducts = (req, res, next) =>
{
    //const products = Product.fetchAll();
    //console.log('from product.js controller', products);
} */

