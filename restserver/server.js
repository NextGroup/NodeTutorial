var http = require('http'); 
var route = require('./route.js');   


process.on('uncaughtException', function(error) { 
    console.log('Error ' + error.stack); 
});


function onRequest(req, res) { 
    var body = '';  
    req.on('data', function(chunk) { 
        body += chunk; 
    });  
    req.on('end', function() { 
        route.route(req, res, body); 
    }); 
}   

var server = http.createServer(onRequest); 
server.listen(8080);



/*var http = require('http'); 
var url = require('url');  

function onRequest(req, res) { 
    var pathname = url.parse(req.url).pathname;  
    switch (pathname) { 
        case '/creatememo':
             res.writeHead(200, {
                "Content-Type": "text/plain"
            }); 
            res.write('creatememo'); 
            res.end(); 
            break; 
        case '/readmemo':
             res.writeHead(200, {
                "Content-Type": "text/plain"
            }); 
            res.write('readmemo'); 
            res.end(); 
            break; 
        case '/updatememo':
             res.writeHead(200, {
                "Content-Type": "text/plain"
            }); 
            res.write('updatememo'); 
            res.end(); 
            break; 
        case '/removememo':
             res.writeHead(200, {
                "Content-Type": "text/plain"
            }); 
            res.write('removememo'); 
            res.end(); 
            break; 
        default:
             res.writeHead(404, {
                "Content-Type": "text/plain"
            }); 
            res.write('pathname error'); 
            res.end(); 
            break; 
    } 
}   
var server = http.createServer(onRequest); 
server.listen(8080);      
*/