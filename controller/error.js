const path = require('path');
const rootDir = require('../util/path');

exports.getErrorLog = (req, res, next)=>
{
    //res.send('<h1>Page Not Found!<h1>');
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}