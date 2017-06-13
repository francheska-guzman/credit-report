var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

let connectionString = 'postgres://localhost:5432/creditreport';
let db = pgp(connectionString);

// Get personal information from all users.
function getAllUserInformation(req, res, next) {
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender')
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Personal information from all users retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get personal information from one user.
function getOneUserInformation(req, res, next) {
let user_id = parseInt(req.params.user_id);
  db.one('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender WHERE user_information.id = $1', user_id)
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Personal information from one user retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get personal and financial information from all users.
function getAllUserAccounts(req, res, next) {
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN account_details ON account_details.user_id = user_information.id JOIN current_status ON current_status.id = account_details.current_status JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id')
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Personal and financial information from all users retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get personal and financial information (all accounts) from one user.
function getOneUserAccounts(req, res, next) {
let user_id = parseInt(req.params.user_id);
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN account_details ON account_details.user_id = user_information.id JOIN current_status ON current_status.id = account_details.current_status JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id WHERE user_id = $1', user_id)
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Personal and financial information (all accounts) from one user retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get personal and financial information (one account) from one user.
function getOneUserAccount(req, res, next) {
let user_id = parseInt(req.params.user_id);
let id = parseInt(req.params.id);
  db.one('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN account_details ON account_details.user_id = user_information.id JOIN current_status ON current_status.id = account_details.current_status JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id WHERE user_id = $1 AND account_details.id = $2', [user_id, id])
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Personal and financial information (one account) from one user retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllUserInformation: getAllUserInformation,
  getOneUserInformation: getOneUserInformation,
  getAllUserAccounts: getAllUserAccounts,
  getOneUserAccounts: getOneUserAccounts,
  getOneUserAccount: getOneUserAccount
};