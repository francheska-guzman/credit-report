var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Credit Report API' });
})

router.get('/personal', db.getAllUserInformation);
router.get('/personal/:id', db.getOneUserInformation);
router.get('/personalfinancial/', db.getAllUserAccounts);
router.get('/personalfinancial/:user_id', db.getOneUserAccounts);
router.get('/personalfinancial/:user_id/:id', db.getOneUserAccount);

module.exports = router;