var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Credit Report API' });
})

router.get('/personal', db.getAllUserInformation);
router.get('/personal/:id', db.getOneUserInformation);
router.get('/personalfinancial/', db.getAllUserAccounts);
router.get('/personalfinancial/:id', db.getOneUserAccounts);
router.get('/personalfinancial/:id/:account_id', db.getOneUserAccount);

module.exports = router;