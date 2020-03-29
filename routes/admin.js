const path = require('path');
const express = require('express');


const getAdminProduct = require('../controller/prdouct');
const router = express.Router();

router.get('/add-product', getAdminProduct.getAddProductView);
router.post('/add-product', getAdminProduct.getAllProducts);

exports.routes = router;

