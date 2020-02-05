
// // var http = require('http');
// // var url = require('url');


// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   var q = url.parse(req.url, true).query;
// //   res.write('Year = '+q.year+'and age = '+q.age);
// //   res.end();
// // }).listen(8080);



// // var http = require('http');
// // var url = require('url');
// // var fs = require('fs');
// // http.createServer(function(req,res){
// //   const q = url.parse(req.url, true);
// //   const fileName = '.'+q.pathname;
// //   fs.readFile(fileName,function(err,data)
// //   {
// //     if(err)
// //     {
// //       res.writeHead(404,{'Content-Type':'text/html'});
// //       return res.end('404 Not Found');
// //     }

// //     res.writeHead(200,{'Content-Type':'text/html'});
// //     res.write(data);
// //     return res.end();

// //   }); 
// // }).listen(8080);

// // var http = require('http');
// // var formidable = require('formidable');
// // const fs = require('fs');

// // http.createServer(function (req, res) {
// //   if (req.url == '/fileupload') {
// //     var form = new formidable.IncomingForm();
// //     form.parse(req, function(err, fields, files)
// //     {
// //       var oldpath = files.filetoupload.path;
// //       var newpath = 'E:/ff/'+files.filetoupload.path;
// //       fs.rename(oldpath,newpath,function(err){
// //         if(err) throw err;
// //         res.write('Successfully uploaded!');
// //         res.end();
// //       });
// //     });
// //   } else {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //     res.write('<input type="file" name="filetoupload"><br>');
// //     res.write('<input type="submit">');
// //     res.write('</form>');
// //     return res.end();
// //   }
// // }).listen(8080);

// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const server = http.createServer(function(req, res)
// { 
//     const path = url.parse(req.url, true);
//     const fileName = '.'+path.pathname;
//     const method = req.method;
//     console.log('method '+ method);
//     console.log('statusCode '+res.statusCode);
//     if(req.url === '/')
//     {
//       const file = './file.html';
//       fs.readFile(file, function(err, data)
//       {if(err)
//             {
//               res.writeHead(404,{'Content-Type':'text/html'});
//               return res.end('404 Not Found');
//             }
        
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(data);
//             return res.end();
//       });
//     }
//     if(fileName === './fileupload' && method === 'POST')
//     {
//       const body = [];

//       req.on('data', function(data)
//       {
//         body.push(data);
//       });

//       return req.on('end',function()
//       {
//         const parseBody = Buffer.concat(body).toString();
//         const message = parseBody.split('=')[1];
//         console.log('ParseBody'+parseBody);
//         fs.writeFile('message.txt',message);

//         res.statusCode = 301;
//         res.setHeader('Location','/');
//         return res.end();

        
//       });
//     }
//     console.log(fileName);
//     console.log('url:'+req.url);

// }).listen(8080);



/////////////////////////


/* 
//needed for vanila node.js
const http = require('http'); */
const express = require('express');

/* const routes = require('./routes');// self created modulse
    was implented before express!
*/



const app = express();

app.use((req, res, next)=>{
    console.log("I am from first app.use()");
    res.send('<h1>Hello from Express</h1>');
});


app.use((req, res, next)=>{
    console.log("I am from Second app.use()");
});

app.listen(3000);

/* 
//creat server with vanila node.js
const server = http.createServer(handler);

server.listen(3000); */
