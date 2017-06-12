var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

let connectionString = 'postgres://localhost:5432/creditreport';
let db = pgp(connectionString);

// Get the basic information from all users.
function getAllUserInformation(req, res, next) {
  db.any('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender')
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
let id = parseInt(req.params.id);
  db.one('SELECT * FROM user_information JOIN genders ON genders.id = user_information.gender WHERE user_information.id = $1', id)
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