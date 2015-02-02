/** route.js **/  
var memoHandler = require('./memoHandler.js'); 
var url = require('url');  
exports.route = (function() {  
    var handlers = {};  
    
    handlers['/memo'] = { 
        POST: memoHandler.create,
         GET: memoHandler.read,
        PUT: memoHandler.update,
         DELETE: memoHandler.remove 
    };  

    function route(req, res, body) { 
        var pathname = url.parse(req.url).pathname; 
        var method = req.method.toUpperCase();  

      

	        if (typeof handlers[pathname][method] === 'function') { 
	            handlers[pathname][method](req, res, body); 

	            console.log('type', method);

	        } else { 
	            res.writeHead(404, {
	                "Content-Type": "text/plain"
	            }); 
	            res.write('pathname error'); 
	            res.end(); 
	        }
    	

         
    }  
    return route; 
})();