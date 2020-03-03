const path = require('path');
const express = require('express');

const router = express.Router();



router.get('/',(req, res, next) =>
{
    console.log(req.body);
    res.sendFile(__dirname, '../', 'views', 'shop.html');
});

module.exports = router;
