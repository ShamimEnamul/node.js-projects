const express = require('express');

const router = express.Router();



router.get('/',(req, res, next) =>
{
    console.log(req.body);
    res.send('<h1> Search ypur products </h1>');
});

module.exports = router;
