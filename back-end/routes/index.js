var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Credit Report API' });
})

router.get('/userinformation', db.getAllUserInformation);
router.get('/userinformation/:id', db.getOneUserInformation);

module.exports = router;