DROP TABLE IF EXISTS account_type;
DROP TABLE IF EXISTS current_status;
DROP TABLE IF EXISTS gender;
DROP TABLE IF EXISTS user_information;
DROP TABLE IF EXISTS account_details;
DROP TABLE IF EXISTS payment_history;

CREATE TABLE account_type(
  id SERIAL PRIMARY KEY,
  account_type VARCHAR(255)
);

CREATE TABLE current_status(
  id SERIAL PRIMARY KEY,
  gender VARCHAR(255)
);

CREATE TABLE gender(
  id SERIAL PRIMARY KEY,
  gender VARCHAR(255)
);

CREATE TABLE user_information(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  date_of_birth VARCHAR(255),
  place_of_birth VARCHAR(255),
  gender REFERENCES gender(id),
);

CREATE TABLE account_details(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user_information(id),
  account_type INT REFERENCES account_type(id),
  opened VARCHAR(255),
  creditor VARCHAR(255),
  credit_limit INT,
  credit_use INT,
  current_status INT REFERENCES current_status(id)
);

CREATE TABLE payment_history(
  id SERIAL PRIMARY KEY REFERENCES account_details(id),
  user_id INT REFERENCES account_details(user_id),
  jan BOOLEAN,
  feb BOOLEAN,
  mar BOOLEAN,
  apr BOOLEAN,
  may BOOLEAN,
  jun BOOLEAN,
  jul BOOLEAN,
  aug BOOLEAN,
  sep BOOLEAN,
  oct BOOLEAN,
  nov BOOLEAN,
  dec BOOLEAN
)