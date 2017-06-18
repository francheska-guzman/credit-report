var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

// let connectionString = 'postgres://localhost:5432/creditreport';
let connectionString = process.env.DATABASE_URL;
let db = pgp(connectionString);

// Get personal information from all users.
function getAllUserInformation(req, res, next) {
  db.any('SELECT * FROM user_information JOIN marital_status ON marital_status.id = user_information.marital_status JOIN genders ON genders.id = user_information.gender JOIN us_credit_score ON us_credit_score.id = user_information.state JOIN public_record ON public_record.id = user_information.public_record ORDER BY user_information.id')
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
let id = parseInt(req.params.id);
  db.one('SELECT * FROM user_information JOIN marital_status ON marital_status.id = user_information.marital_status JOIN genders ON genders.id = user_information.gender JOIN us_credit_score ON us_credit_score.id = user_information.state JOIN public_record ON public_record.id = user_information.public_record WHERE user_information.id = $1', id)
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
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN marital_status ON marital_status.id = user_information.marital_status JOIN us_credit_score ON us_credit_score.id = user_information.state JOIN public_record ON public_record.id = user_information.public_record JOIN account_details ON account_details.user_id = user_information.id JOIN current_status ON current_status.id = account_details.current_status JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id JOIN collection ON collection.id = account_details.collection ORDER BY account_details.user_id')
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
let id = parseInt(req.params.id);
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN marital_status ON marital_status.id = user_information.marital_status JOIN us_credit_score ON us_credit_score.id = user_information.state JOIN public_record ON public_record.id = user_information.public_record JOIN account_details ON account_details.user_id = user_information.id JOIN account_type ON account_type.id = account_details.account_type JOIN current_status ON current_status.id = account_details.current_status JOIN payment_history ON payment_history.id = account_details.id JOIN collection ON collection.id = account_details.collection WHERE user_information.id = $1', id)
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
let id = parseInt(req.params.id);
let account_id = parseInt(req.params.account_id);
  db.one('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender JOIN marital_status ON marital_status.id = user_information.marital_status JOIN us_credit_score ON us_credit_score.id = user_information.state JOIN public_record ON public_record.id = user_information.public_record JOIN account_details ON account_details.user_id = user_information.id JOIN account_type ON account_type.id = account_details.account_type JOIN current_status ON current_status.id = account_details.current_status JOIN payment_history ON payment_history.id = account_details.id JOIN collection ON collection.id = account_details.collection WHERE user_information.id = $1 AND account_details.id = $2', [id, account_id])
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

// Get all hard inquiries from all users.
function getAllUsersAllInquiries(req, res, next) {
  db.any('SELECT user_information.id, user_id, first_name, middle_name, last_name, inq_creditor, posted, hard_inquiries.account_type, account_type.id, account_type.account_type FROM user_information FULL OUTER JOIN hard_inquiries ON user_information.id = hard_inquiries.user_id LEFT JOIN account_type ON account_type.id = hard_inquiries.account_type ORDER BY user_information.id')
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All hard inquiries from all users retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get all hard inquiries from one user.
function getOneUsersAllInquiries(req, res, next) {
let id = parseInt(req.params.id);
  db.any('SELECT user_information.id, user_id, first_name, middle_name, last_name, inq_creditor, posted, hard_inquiries.account_type, account_type.id, account_type.account_type FROM user_information FULL OUTER JOIN hard_inquiries ON user_information.id = hard_inquiries.user_id LEFT JOIN account_type ON account_type.id = hard_inquiries.account_type WHERE user_information.id = $1', id)
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All hard inquiries from one user retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get all credit scores by state.
function getAverageScoreByState(req, res, next) {
  db.any('SELECT * FROM us_credit_score')
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'List of credit score average by state retrieved.'
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
  getOneUserAccount: getOneUserAccount,
  getAllUsersAllInquiries: getAllUsersAllInquiries,
  getOneUsersAllInquiries: getOneUsersAllInquiries,
  getAverageScoreByState: getAverageScoreByState,
};