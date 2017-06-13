var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Credit Report API' });
})

router.get('/personalinformation', db.getAllUserInformation);
router.get('/personalinformation/:user_id', db.getOneUserInformation);
router.get('/financialinformation/', db.getAllUserAccounts);
router.get('/financialinformation/:user_id', db.getOneUserAccounts);
router.get('/financialinformation/:user_id/:id', db.getOneUserAccount);

module.exports = router;