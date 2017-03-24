var express = require('express');
var fs = require('fs');
var app = express();
//mock

app.use(express.static('./'))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/gethf',function(req,res){
    fs.readFile(__dirname + '/public/data/cz.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          var json = JSON.parse(data);
          res.json(json);
        }
    })
})

app.listen(3008,function(){
   console.log('服务器启动：http://localhost:3008')
})
