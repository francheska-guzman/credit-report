var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', db.getAllUserInformation);

module.exports = router;