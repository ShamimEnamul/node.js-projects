const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const addminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorLogs = require('./controller/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',addminRouter.routes);
app.use(shopRouter);
app.use('/', errorLogs.getErrorLog);

app.listen(3000);
