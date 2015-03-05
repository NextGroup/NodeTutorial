var express = require('express');
var router = express.Router();
var memo = require('../handlers/memo');

router.post('/', memo.create);
router.get('/', memo.read);
router.put('/', memo.update);
router.delete('/', memo.remove);

module.exports = router;