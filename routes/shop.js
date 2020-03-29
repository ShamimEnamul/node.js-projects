
const express = require('express');

const getShopIssues = require('../controller/shop');

const router = express.Router();

router.get('/',  getShopIssues.getShopView);

module.exports = router;
