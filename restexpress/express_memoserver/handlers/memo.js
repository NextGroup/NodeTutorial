/** memo.js **/ 
var Datastore = require('nedb');
var db = new Datastore({
    filename: './data/memo',
    autoload: true
});
exports.create = function(req, res) {
    var body = req.body;
    _insertMemo(body, function(error, result) {
        res.json({
            error: error,
            result: result
        });
    });
};
exports.read = function(req, res) {
    _findMemo({}, function(error, results) {
        res.json({
            error: error,
            results: results
        });
    });
};
exports.update = function(req, res) {
    var where = req.query;
    var body = req.body;
    _updateMemo(where, body, function(error, results) {
        res.json({
            error: error,
            results: results
        });
    });
};
exports.remove = function(req, res) {
    var where = req.query;
    _removeMemo(where, function(error, results) {
        res.json({
            error: error,
            results: results
        });
    });
};

function _insertMemo(body, callback) {
    body = typeof body === 'string' ? JSON.parse(body) : body;
    var memo = {
        author: body.author,
        memo: body.memo,
        date: new Date()
    };
    db.insert(memo, callback);
}

function _findMemo(where, callback) {
    where = where || {};
    db.find(where, callback);
}

function _updateMemo(where, body, callback) {
    db.update(where, {
        $set: body
    }, {
        multi: true
    }, callback);
}

function _removeMemo(where, callback) {
    db.remove(where, {
        multi: true
    }, callback);
}