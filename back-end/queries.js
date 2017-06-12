var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

let connectionString = 'postgres://localhost:5432/creditreport';
let db = pgp(connectionString);

// Get the basic information from all users.
function getAllUserInformation(req, res, next) {
  db.any('SELECT * FROM user_information ON user_information.id = account_details.user_id JOIN genders ON genders.id = user_information.gender JOIN account_details JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id JOIN current_status ON current_status.id = account_details.current_status')
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All user information retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// Get the basic information from one user.
function getOneUserInformation(req, res, next) {
let user_id = parseInt(req.params.user_id);
  db.any('SELECT * FROM user_information ON user_information.id = account_details.user_id JOIN genders ON genders.id = user_information.gender JOIN account_details JOIN account_type ON account_type.id = account_details.account_type JOIN payment_history ON payment_history.id = account_details.id JOIN current_status ON current_status.id = account_details.current_status WHERE user_id = $1', user_id)
    .then(function(data) {
      console.log('DATA: ', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'One user information retrieved.'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllUserInformation: getAllUserInformation,
  getOneUserInformation: getOneUserInformation,
};