const express = require('express');
const createReadStream = require('fs');

var app = express();
var PORT = 3000;
const pkg = require('body-parser');
const { urlencoded } = pkg;
app.use(urlencoded({extended:false}));
app.get('/',function(req,res){
    const files = createReadStream('Q15.js');
    res.writeHead(200,{'content-type':'text/html'});
    files.pipe(res);
});

app.post('/file-data',function(req,res){
    var name = req.body.id;
    res.download(name);
});

app.listen(PORT,function(err){
    if(err) console.log(err);
    console.log("server Listening port",PORT)
});
