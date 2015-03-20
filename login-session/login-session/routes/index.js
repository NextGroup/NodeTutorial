var express = require('express');
var router = express.Router(); 

/* GET home page. */ 
router.get('/', function(req, res) {
    
    res.cookie('name', 'youngsu', {
        expires: new Date(Date.now() + 90000),
        httpOnly: true, 
        signed:true
    });

    res.render('index', {
        title: 'Express'
    });
});
module.exports = router;