var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><body><p>this is home page.</p></body></html>');
        res.end();

    }
    else if(req.url=="/student"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><body><p>this is student page.</p></body></html>');
    res.end();
    }
    else if(req.url=="/admin"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><body><p>this is admin page.</p></body></html>');
    res.end();
    }
    else
    res.end('404 server error');

});
server.listen(5000);
console.log('node js web server at port 5000 is running..');