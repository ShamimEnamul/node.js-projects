//class
const Product = require('../model/product');
const path = require('path');
const rootDir = require('../util/path');
//const adminData = require('./prdouct');

exports.getShopView = (req, res, next) =>
{
    const products = Product.fetchAll();
    console.log('shop.js', products); // fetchAll is a static function, so we can call it with the class name.
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}