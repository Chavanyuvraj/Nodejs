var http=require('http');
var fs=require('fs');
http.createServer(function (req,res){
    fs.readFile('pro.html',function(err,data){
        res.writeHead(200,{'content-type':'html'});
        res.write(data);
        res.end();
    });
}).listen(8040);