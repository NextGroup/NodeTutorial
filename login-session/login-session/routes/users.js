var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login.html',
    failureFlash: true
}), function(req, res) {
    console.log('login');
    console.log(req.isAuthenticated());
    res.redirect('/users/login_success');
});

router.get('/login_success', ensureAuthenticated, function(req, res) {
    res.send(req.user);
    // res.render('users', { user: req.user });
});

function ensureAuthenticated(req, res, next) {
    // 로그인이 되어 있으면, 다음 파이프라인으로 진행    
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    } else {
        // 로그인이 안되어 있으면, login 페이지로 진행        
        console.log('test');
        res.redirect('/login.html');
    }
}

module.exports = router;