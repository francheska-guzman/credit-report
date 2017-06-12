CREATE TABLE account_type(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE current_status(
  id SERIAL PRIMARY KEY,
  status VARCHAR(255)
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
  gender INT REFERENCES gender(id),
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
);

INSERT INTO account_type (type) VALUES 
  ('Credit Card'), 
  ('Personal Loan'),
  ('Student Loan')
  ('Auto Loan'),
  ('Home Loan'),
  ('Business Loan');

INSERT INTO current_status (status) VALUES 
  ('Open'), 
  ('Closed');

INSERT INTO gender (gender) VALUES 
  ('Male'), 
  ('Female');

INSERT INTO user_information (first_name, last_name, date_of_birth, place_of_birth, gender) VALUES 
  ('John', 'Doe', '1-18-1979', 'New York, NY', 1), 
  ('Jane', 'Monroe', '10-25-1984', 'San Francisco, CA', 2);
